<template>
  <div>{{ config }}</div>
</template>

<script>
export default {
  name: "form-item-id",
  props: {
    config: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>