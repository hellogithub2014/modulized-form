
<script>
export default {
  data() {
    return {};
  },
  computed: {
    visibleFormGroups() {
      return this.formGroups.filter(groupName => {
        const groupVm = this.$refs[groupName];
        return !groupVm.hidden;
      });
    }
  }
};
</script>
