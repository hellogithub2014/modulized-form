<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    formGroupVm: {
      type: Object,
      required: true
    },
    formVm: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(["formData"])
  },
  methods: {
    ...mapMutations("formGroup", ["hideFormItem", "showFormItem"]),
    toggleVisible(hideFunc) {
      if (hideFunc()) {
        this.hideFormItem(this.$options.name);
      } else {
        this.showFormItem(this.$options.name);
      }
    }
  }
};
</script>
