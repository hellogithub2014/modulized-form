export default {
  props: {
    formItemModel: {
      type: Object,
      required: true,
    },
    context: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleFormItem(itemId) {
      this.context.dynamicForm.toggleFormItem(itemId);
    },
    updateFormItemData(model) {
      this.context.dynamicForm.updateFormItemData(this.formItemModel._component, model);
    },
  },
};
