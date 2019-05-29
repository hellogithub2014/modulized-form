<template>
  <vi-form-item :prop="formItemModel._component" label="id">
    <vi-input :value="formItemModel.id" @blur="updateId"></vi-input>
    <p>name: {{ formItemModel.name }}</p>
  </vi-form-item>
</template>

<script>
import dfFormItem from "../df-form-item";

export default {
  name: "form-item-id",
  extends: dfFormItem,
  computed: {
    hidden() {
      // TODO: 获取vm上的属性进行判断
      // return formGroupVm.index === 1;
      return false;
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