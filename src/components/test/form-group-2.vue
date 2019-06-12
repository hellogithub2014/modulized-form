<template>
  <div>
    <h2>Form Group 2</h2>

    <component
      v-for="formItem in formItems"
      v-show="isFormItemVisible(formItem)"
      :key="formItem"
      :is="formItem"
      class="form-item"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import formItemDesc from "./form-item-desc";
import formItemText from "./form-item-text";

export default {
  name: "form-group-2",
  components: {
    formItemDesc,
    formItemText
  },
  computed: {
    ...mapState("demo/form-group-2", ["formItems"]),
    ...mapGetters("demo/form-group-2", ["isFormItemVisible"])
  },
  // trick: 放到created钩子中会报错
  mounted() {
    this.initFormItems([formItemDesc, formItemText]);
  },
  methods: {
    ...mapMutations("demo/form-group-2", ["initFormItems", "toggleVisible"])
  }
};
</script>

<style scoped>
.form-item {
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
}
</style>