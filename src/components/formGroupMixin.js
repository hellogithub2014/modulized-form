export default {
  props: {
    formVm: {
      type: Object,
      required: true
    }
  },
  computed: {
    formGroupVm() {
      return this;
    }
  },
  methods: {
    toggleVisible(hideFunc) {
      if (hideFunc()) {
        this.$emit("hide");
      } else {
        this.$emit("show");
      }
    }
  }
};
