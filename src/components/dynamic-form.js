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

  getFormItem(itemId) {
    return this.context.formItems.find(item => item.id === itemId); // 表单项配置
  }

  resetFormData(formData) {
    this.context.formModel = this.context.formModel || {};
    this.context.formData = formData;

    const groupOptions = this.visibleGroups.map(group => {
      const { itemIds = [] } = group; // itemIds只有组件的id
      const formItemOptions = itemIds.map(itemId => {
        const itemObj = this.getFormItem(itemId);

        const model = itemObj.data2Model(formData);
        itemObj.config = {
          data: model,
          id: itemObj.id,
        };
        itemObj.hidden = itemObj.hidden === undefined ? false : itemObj.hidden;

        this.context.formModel[itemObj.id] = model;

        return itemObj;
      });
      return {
        ...group,
        formItemOptions,
      };
    });

    this.context = {
      ...this.context,
      groupOptions,
    };
  }

  // 更新form item对应的formData
  updateFormItemData(itemId, model) {
    const formItem = this.getFormItem(itemId);
    const itemData = formItem.model2Data(model, this.context);
    this.resetFormData({
      ...this.context.formData,
      ...itemData,
    });
  }

  // 切换指定form item的显隐
  toggleFormItem(itemId) {
    const { groupOptions } = this.context;
    for (let i = 0; i < groupOptions.length; i++) {
      const { formItemOptions } = groupOptions[i];
      for (let j = 0; j < formItemOptions.length; j++) {
        const cur = formItemOptions[j];
        if (cur.id === itemId) {
          cur.hidden = !cur.hidden;
          this.resetFormData(this.context.formData); // trigger dom update
          return;
        }
      }
    }
  }
}

export default DynamicForm;
