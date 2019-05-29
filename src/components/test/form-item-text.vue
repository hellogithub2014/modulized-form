<template>
  <vi-form-item label="text">{{ formItemModel.text }}</vi-form-item>
</template>

<script>
import dfFormItem from "../df-form-item";

export default {
  name: "form-item-text",
  extends: dfFormItem
};
</script>

<style lang="scss" scoped>
</style>