<template>
  <vi-form-item :prop="formItemModel._component" label="id">
    <vi-input :value="formItemModel.id" @blur="updateId"></vi-input>
    <p>name: {{ formItemModel.name }}</p>
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
    hidden(context, formGroupVm) {
      return formGroupVm.index === 1;
    },
    data2Model(formData, context) {
      return {
        id: formData.a,
        name: formData.b
      };
    },
    model2Data(model, context) {
      return {
        a: +model.id
      };
    }
  },

  methods: {
    updateId(event) {
      this.updateFormItemData({
        id: event.target.value
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>