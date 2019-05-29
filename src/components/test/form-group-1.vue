<template>
  <div>
    <h2>Form Group 1</h2>
    <div>
      <p>index: {{ index }}</p>
      <vi-radio-group v-model="index">
        <vi-radio :label="0">0</vi-radio>
        <vi-radio :label="1">1</vi-radio>
      </vi-radio-group>
    </div>

    <component
      v-for="itemName in visibleFormItems"
      :key="itemName"
      :is="itemName"
      class="form-item"
    />
  </div>
</template>

<script>
import dfFormGroup from "../df-form-group";
import formItemId from "./form-item-id";
import formItemName from "./form-item-name";

export default {
  name: "form-group-1",
  extends: dfFormGroup,
  components: {
    formItemId,
    formItemName
  },
  data() {
    return {
      index: 1,
      formItems: ["form-item-id", "form-item-name"]
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