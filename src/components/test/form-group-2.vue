<template>
  <div>
    <h2>Form Group 2</h2>

    <component
      v-for="itemName in formItems"
      v-show="isFormItemVisible(itemName)"
      :ref="itemName"
      :key="itemName"
      :is="itemName"
      class="form-item"
      @hide="hideFormItem(itemName)"
      @show="showFormItem(itemName)"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
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
    ...mapState("demo/formGroup2", ["formItems"]),
    ...mapGetters("demo/formGroup2", ["isFormItemVisible"])
  },
  mounted() {
    this.initFormItems(["form-item-desc", "form-item-text"]);
  },
  methods: {
    ...mapMutations("demo/formGroup2", [
      "initFormItems",
      "hideFormItem",
      "showFormItem"
    ])
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