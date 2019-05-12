<template>
  <div>{{ config }}</div>
</template>

<script>
export default {
  name: "form-item-text",
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