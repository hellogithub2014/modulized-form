class DynamicForm {
  constructor(options) {
    this.context = {
      ...options,
      formGroupsConfig: [],
      formModel: null, // 用于form校验
      formData: null, // 用于后端接口
      dynamicForm: this,
    };
  }

  // 获取表单项组件配置
  getFormItemConfig(itemId) {
    return this.context.formItems.find(item => item.component === itemId);
  }

  resetFormData(formData) {
    this.context.formModel = this.context.formModel || {};
    this.context.formData = formData;

    const formGroupsConfig = this.context.groups.map(group => {
      const { itemIds = [] } = group; // itemIds只有组件的id
      const formItemsConfig = itemIds.map(itemId => {
        const config = this.getFormItemConfig(itemId);
        const model = config.data2Model(formData);

        this.context.formModel[config.component] = model; // 设置formModel

        return {
          ...config,
          formItemModel: {
            ...model,
            _component: config.component,
          },
        };
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
}

export default DynamicForm;
