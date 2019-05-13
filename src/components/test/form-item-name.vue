<template>
  <vi-form-item>
    <p>{{ config.data.name }}</p>
    <vi-button @click="updateName">updateName</vi-button>
  </vi-form-item>
</template>

<script>
export default {
  name: "form-item-name",
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
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    updateName() {
      this.context.dynamicForm.updateFormItemData(this.config.id, {
        name: this.config.data.name+ `-> ${this.count++}`
      });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>