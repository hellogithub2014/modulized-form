
<script>
import { mapActions } from "vuex";

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
  },
  methods: {
    ...mapActions("fillForm")
  }
};
</script>
