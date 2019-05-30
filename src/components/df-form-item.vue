<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["formData"]),
    formVm() {
      return this.formGroupVm.formVm;
    },
    formGroupVm() {
      return this.$parent;
    }
  }
};
</script>
