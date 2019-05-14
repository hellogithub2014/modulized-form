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
    updateFormItemData(model) {
      this.context.dynamicForm.updateFormItemData(this.formItemModel._component, model);
    },
  },
};
