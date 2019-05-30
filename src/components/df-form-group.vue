<script>
export default {
  data() {
    return {
      visibleFormItems: []
    };
  },
  created() {
    this.visibleFormItems = this.formItems;
  },
  mounted() {
    this.visibleFormItems = this.formItems.filter(itemName => {
      const itemVm = this.$refs[itemName];
      return !itemVm.hidden;
    });
  },
  computed: {
    formVm() {
      return this.$parent;
    }
  }
};
</script>
