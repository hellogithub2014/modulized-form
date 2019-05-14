<script>
export default {
  props: {
    option: {
      type: Object,
      required: true
    },
    context: {
      type: Object,
      required: true
    }
  },
  computed: {
    formItemsConfig() {
      return this.option.formItemsConfig.filter(item => {
        const { hidden } = item;
        if (hidden === undefined) {
          return true;
        }
        if (typeof hidden === "boolean") {
          return !hidden;
        }
        if (typeof hidden === "function") {
          return !item.hidden(this.context, this);
        }

        return !hidden;
      });
    }
  }
};
</script>
