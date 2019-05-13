<template>
  <vi-form-item>
    <p>{{ model.name }}</p>
    <vi-button @click="updateName">updateName</vi-button>
  </vi-form-item>
</template>

<script>
const name = "form-item-name";

export default {
  name,
  _dynamicFormConfig: {
    component: name,
    data2Model(formData, context) {
      return {
        name: formData.b
      };
    },
    model2Data(model, context) {
      return {
        b: model.name
      };
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
  data() {
    return {
      count: 0
    };
  },
  methods: {
    updateName() {
      this.context.dynamicForm.updateFormItemData(this.model.id, {
        name: this.model.name + `-> ${this.count++}`
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>