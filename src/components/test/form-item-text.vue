<template>
  <vi-form-item label="text">{{ formItemModel.text }}</vi-form-item>
</template>

<script>
import dfFormItem from "../df-form-item";

const name = "form-item-text";
export default {
  name,
  extends: dfFormItem,
  _dynamicFormConfig: {
    component: name,
    data2Model(formData, context) {
      return {
        text: formData.d
      };
    },
    model2Data(model, context) {
      return model;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>