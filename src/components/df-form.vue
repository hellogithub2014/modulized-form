
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      hiddenFormGroups: []
    };
  },
  computed: {
    visibleFormItems() {
      return this.formGroups.filter(
        groupName => !this.hiddenFormGroups.includes(groupName)
      );
    },
    formVm() {
      return this;
    },
    ...mapGetters(["formData", "formModel"])
  },
  methods: {
    ...mapActions(["fillForm"]),
    isFormGroupVisible(groupName) {
      return !this.hiddenFormGroups.includes(groupName);
    },
    hideFormGroup(groupName) {
      if (this.isFormGroupVisible(groupName)) {
        this.hiddenFormGroups.push(groupName);
      }
    },
    showFormGroup(groupName) {
      const index = this.hiddenFormGroups.indexOf(groupName);
      if (index > -1) {
        this.hiddenFormGroups.splice(index, 1);
      }
    }
  }
};
</script>
