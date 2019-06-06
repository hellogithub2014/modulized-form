<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  props: {
    formVm: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState("formGroup", ["formItems", "hiddenFormItems"]),
    ...mapGetters("formGroup", ["isFormItemVisible"]),
    formGroupVm() {
      return this;
    }
  },
  methods: {
    ...mapMutations("formGroup", [
      "initFormItems",
      "hideFormItem",
      "showFormItem"
    ]),
    ...mapActions("formGroup", ["toggleFormGroup"]),
    toggleVisible(hideFunc) {
      this.toggleFormGroup(hideFunc, this.$options.name);
    }
  }
};
</script>
