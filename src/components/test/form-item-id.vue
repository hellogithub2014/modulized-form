<template>
  <vi-form-item>
    <p>id: {{ model.id }}</p>
    <p>name: {{ model.name }}</p>
    <vi-button @click="toggleName">toggle name</vi-button>
  </vi-form-item>
</template>

<script>
const name = "form-item-id";
export default {
  name,
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
  props: {
    model: {
      type: Object,
      required: true
    },
    context: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleName() {
      this.context.dynamicForm.toggleFormItem("name");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>