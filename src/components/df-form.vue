
<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["formData", "formModel"]),
    visibleFormGroups() {
      return this.formGroups.filter(groupName => {
        const groupVm = this.$refs[groupName];
        return !groupVm.hidden;
      });
    }
  },
  methods: {
    ...mapActions("fillForm")
  }
};
</script>
