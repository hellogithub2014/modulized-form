<template>
  <div>
    <h2>Form Group 2</h2>

    <component
      v-for="formItem in formItems"
      v-show="isFormItemVisible(formItem.name)"
      :key="formItem.name"
      :is="formItem.name"
      class="form-item"
      @hide="hideFormItem(formItem.name)"
      @show="showFormItem(formItem.name)"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import formGroupMixin from "../formGroupMixin";
import formItemDesc from "./form-item-desc";
import formItemText from "./form-item-text";

export default {
  name: "form-group-2",
  mixins: [formGroupMixin],
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
    ...mapMutations("demo/form-group-2", ["initFormItems"]),
    ...mapActions("demo/form-group-2", ["hideFormItem", "showFormItem"])
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