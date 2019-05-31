<script>
export default {
  props: {
    formVm: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hiddenFormItems: []
    };
  },
  computed: {
    visibleFormItems() {
      return this.formItems.filter(
        itemName => !this.hiddenFormItems.includes(itemName)
      );
    },
    formGroupVm() {
      return this;
    }
  },
  methods: {
    isFormItemVisible(itemName) {
      return !this.hiddenFormItems.includes(itemName);
    },
    hideFormItem(itemName) {
      if (this.isFormItemVisible(itemName)) {
        this.hiddenFormItems.push(itemName);
      }
    },
    showFormItem(itemName) {
      const index = this.hiddenFormItems.indexOf(itemName);
      if (index > -1) {
        this.hiddenFormItems.splice(index, 1);
      }
    },
    toggleVisible(hideFunc) {
      if (hideFunc()) {
        this.$emit("hide");
      } else {
        this.$emit("show");
      }
    }
  }
};
</script>
