<template>
  <div>
    <h2>{{ option.label }}</h2>
    <component
      v-for="item in option.formItemOptions"
      :key="item.id"
      :is="item.component"
      :config="item.config"
    />
  </div>
</template>

<script>
import formItemId from "./form-item-id";
import formItemName from "./form-item-name";
import formItemDesc from "./form-item-desc";
import formItemText from "./form-item-text";

export default {
  name: "form-group",
  components: {
    formItemId,
    formItemName,
    formItemDesc,
    formItemText
  },
  props: {
    option: {
      type: Object,
      required: true
    },
    context: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>