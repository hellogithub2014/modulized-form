<template>
  <div>
    <h2>{{ option.label }}</h2>
    <component
      v-for="config in formItemsConfig"
      :key="config.component"
      :is="config.component"
      :formItemModel="config.formItemModel"
      :context="context"
      class="form-item"
    />
  </div>
</template>

<script>
import formItemId from "./form-item-id";
import formItemName from "./form-item-name";
import formItemDesc from "./form-item-desc";
import formItemText from "./form-item-text";

export default {
  name: "dy-form-group",
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
  },
  computed: {
    formItemsConfig() {
      return this.option.formItemsConfig.filter(item => !item.hidden);
    }
  }
};
</script>

<style scoped>
.form-item {
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
}
</style>