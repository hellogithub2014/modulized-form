<script>
export default {
  computed: {
    visibleFormItems() {
      return this.formItems.filter(itemName => {
        const itemVm = this.$refs[itemName];
        if (!itemVm) {
          return true;
        }
        return !itemVm.hidden;
      });
    },
    formVm() {
      return this.$parent;
    }
  }
};
</script>
