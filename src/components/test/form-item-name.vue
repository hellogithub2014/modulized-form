<template>
  <vi-form-item label="name">
    <span>{{ formItemModel.name }}</span>
    <div>
      <vi-button @click="updateName">updateName</vi-button>
    </div>
  </vi-form-item>
</template>

<script>
import dfFormItem from "../df-form-item";

export default {
  name: "form-item-name",
  extends: dfFormItem,
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