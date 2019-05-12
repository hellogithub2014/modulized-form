class DynamicForm {
  constructor(options) {
    this.context = {
      ...options,
    };
  }

  get visibleGroups() {
    let { groups } = this.context;
    return groups.filter(g => {
      if (g.hidden === undefined) {
        return true;
      }
      if (typeof g.hidden === 'boolean') {
        return g.hidden;
      }

      if (typeof g.hidden === 'function') {
        return !!g.hidden(this.context);
      }

      return true;
    });
  }

  resetFormData(formData) {
    const groupOptions = this.visibleGroups.map(group => {
      const { itemNames = [] } = group; // itemNames只有组件的id
      const formItemOptions = itemNames.map(itemName => {
        const itemObj = this.context.formItems.find(item => item.id === itemName); // 表单项配置
        itemObj.config = {
          data: itemObj.data2Model(formData),
        };
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
}

export default DynamicForm;
