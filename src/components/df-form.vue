
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    visibleFormGroups() {
      return this.formGroups.filter(groupName => {
        const groupVm = this.$refs[groupName];
        // 应对在初始化时没有渲染gorm-group
        if (!groupVm) {
          return true;
        }
        return !groupVm.hidden;
      });
    },
    ...mapGetters(["formData", "formModel"])
  },
  methods: {
    ...mapActions(["fillForm"])
  }
};
</script>
