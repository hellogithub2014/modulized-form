<template>
  <vi-form-item>{{ config }}</vi-form-item>
</template>

<script>
const name = "form-item-text";
export default {
  name,
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
  },
  props: {
    model: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>