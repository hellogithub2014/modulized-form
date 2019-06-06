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
      v-for="itemName in formItems"
      v-show="isFormItemVisible(itemName)"
      :ref="itemName"
      :key="itemName"
      :is="itemName"
      :formVm="formVm"
      :formGroupVm="formGroupVm"
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
      index: 0
    };
  },
  mounted() {
    this.initFormItems(["form-item-id", "form-item-name"]);
  },
  watch: {
    "formVm.type": {
      handler(value) {
        this.toggleVisible(() => value === 1);
      }
    },
    immediate: true
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