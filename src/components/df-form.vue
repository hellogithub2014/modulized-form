
<script>
export default {
  data() {
    return {};
  },
  computed: {
    formGroupsConfig() {
      return this.dynamicForm.context.formGroupsConfig.filter(g => {
        const { hidden } = g;
        if (hidden === undefined) {
          return true;
        }
        if (typeof hidden === "boolean") {
          return !hidden;
        }

        if (typeof hidden === "function") {
          return !hidden(this.dynamicForm.context, this);
        }

        return !hidden;
      });
    }
  }
};
</script>
