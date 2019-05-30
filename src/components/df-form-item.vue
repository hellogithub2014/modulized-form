<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["formData"]),
    formVm() {
      return this.formGroupVm.formVm;
    },
    formGroupVm() {
      return this.$parent;
    }
  }
};
</script>
