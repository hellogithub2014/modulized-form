<template>
  <div>
    <h2>Form Group 2</h2>

    <component
      v-for="itemName in visibleFormItems"
      :ref="itemName"
      :key="itemName"
      :is="itemName"
      class="form-item"
    />
  </div>
</template>

<script>
import dfFormGroup from "../df-form-group";
import formItemDesc from "./form-item-desc";
import formItemText from "./form-item-text";

export default {
  name: "form-group-2",
  extends: dfFormGroup,
  components: {
    formItemDesc,
    formItemText
  },
  data() {
    return {
      index: 1,
      formItems: ["form-item-text", "form-item-desc"]
    };
  },
  computed: {
    // TODO:
    hidden(formVm) {
      return formVm.type === 1;
    }
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