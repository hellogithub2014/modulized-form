class DynamicForm {
  constructor(options) {
    this.context = {
      ...options,
      formModel: null, // 用于form校验
      formData: null, // 用于后端接口
      dynamicForm: this,
    };
  }

  get visibleGroups() {
    let { groups } = this.context;
    return groups.filter(g => {
      if (g.hidden === undefined) {
        return true;
      }
      if (typeof g.hidden === 'boolean') {
        return !g.hidden;
      }

      if (typeof g.hidden === 'function') {
        return !g.hidden(this.context);
      }

      return true;
    });
  }

  // 获取表单项组件配置
  getFormItemConfig(itemId) {
    return this.context.formItems.find(item => item.component === itemId);
  }

  resetFormData(formData) {
    this.context.formModel = this.context.formModel || {};
    this.context.formData = formData;

    const formGroupsConfig = this.visibleGroups.map(group => {
      const { itemIds = [] } = group; // itemIds只有组件的id
      const formItemsConfig = itemIds.map(itemId => {
        const config = this.getFormItemConfig(itemId);

        const model = config.data2Model(formData);
        config.formItemModel = model;
        config.formItemModel._prop = config.component;

        // TODO: hidden：支持function、boolean
        config.hidden = config.hidden === undefined ? false : config.hidden;

        this.context.formModel[config.component] = model; // 设置formModel

        return config;
      });
      return {
        ...group,
        formItemsConfig,
      };
    });

    this.context = {
      ...this.context,
      formGroupsConfig,
    };
  }

  // 更新form item对应的formData
  updateFormItemData(itemId, model) {
    const config = this.getFormItemConfig(itemId);
    const itemData = config.model2Data(model, this.context);
    this.resetFormData({
      ...this.context.formData,
      ...itemData,
    });
  }

  // 切换指定form item的显隐
  toggleFormItem(itemId) {
    const { formGroupsConfig } = this.context;
    for (let i = 0; i < formGroupsConfig.length; i++) {
      const { formItemsConfig } = formGroupsConfig[i];
      for (let j = 0; j < formItemsConfig.length; j++) {
        const config = formItemsConfig[j];
        if (config.component === itemId) {
          config.hidden = !config.hidden;
          this.resetFormData(this.context.formData); // trigger dom update
          return;
        }
      }
    }
  }
}

export default DynamicForm;
