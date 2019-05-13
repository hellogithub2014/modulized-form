<template>
  <vi-form-item>
    <p>id: {{ formItemModel.id }}</p>
    <p>name: {{ formItemModel.name }}</p>
    <vi-button @click="toggleName">toggle name</vi-button>
  </vi-form-item>
</template>

<script>
import dfFormItem from "./df-form-item";

const name = "form-item-id";
export default {
  name,
  extends: dfFormItem,
  _dynamicFormConfig: {
    component: name,
    data2Model(formData, context) {
      return {
        id: formData.a,
        name: formData.b
      };
    },
    model2Data(model, context) {
      return model;
    }
  },

  methods: {
    toggleName() {
      this.toggleFormItem("form-item-name");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>