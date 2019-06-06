
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState( [ "formGroups" ] ),
    formVm () {
      return this;
    },
    ...mapGetters( [ "formData", "formModel", "isFormGroupVisible" ] )
  },
  methods: {
    ...mapMutations( [ "initFormGroups", "hideFormGroup", "showFormGroup" ] ),
    ...mapActions( [ "fillForm" ] )
  }
};
