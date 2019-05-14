<template>
  <vi-form-item label="name">
    <span>{{ formItemModel.name }}</span>
    <div>
      <vi-button @click="updateName">updateName</vi-button>
    </div>
  </vi-form-item>
</template>

<script>
import dfFormItem from "./df-form-item";

const name = "form-item-name";

export default {
  name,
  extends: dfFormItem,
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
  data() {
    return {
      count: 0
    };
  },
  methods: {
    updateName() {
      this.updateFormItemData({
        name: this.formItemModel.name + `-> ${this.count++}`
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>