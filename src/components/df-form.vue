
<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("hiddenFormGroups", "formGroups"),
    visibleFormGroups() {
      return this.formGroups.filter(
        groupName => !this.hiddenFormGroups.includes(groupName)
      );
    },
    formVm() {
      return this;
    },
    ...mapGetters(["formData", "formModel", "isFormGroupVisible"])
  },
  methods: {
    ...mapMutations("initFormGroups", "hideFormGroup", "showFormGroup"),
    ...mapActions(["fillForm"])
  }
};
</script>
