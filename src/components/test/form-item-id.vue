<template>
  <vi-form-item>
    <p>id: {{ config.data.id }}</p>
    <p>name: {{ config.data.name }}</p>
    <vi-button @click="toggleName">toggle name</vi-button>
  </vi-form-item>
</template>

<script>
export default {
  name: "form-item-id",
  props: {
    config: {
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