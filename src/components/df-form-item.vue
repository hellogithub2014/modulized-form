<script>
export default {
  computed: {
    formVm() {
      return this.formGroupVm.formVm;
    },
    formGroupVm() {
      return this.$parent;
    }
  },
  methods: {
    // 迁移到vuex plugin
    updateFormItemData(model) {
      this.context.dynamicForm.updateFormItemData(
        this.formItemModel._component,
        model
      );
    }
  }
};
</script>
