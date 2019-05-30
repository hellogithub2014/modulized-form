
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      visibleFormGroups: []
    };
  },
  created() {
    this.visibleFormGroups = this.formGroups;
  },
  mounted() {
    this.visibleFormGroups = this.formGroups.filter(groupName => {
      const groupVm = this.$refs[groupName];
      return !groupVm.hidden;
    });
  },
  computed: {
    ...mapGetters(["formData", "formModel"])
  },
  methods: {
    ...mapActions(["fillForm"])
  }
};
</script>
