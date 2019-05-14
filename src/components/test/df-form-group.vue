<template>
  <div>
    <h2>{{ option.label }}</h2>
    <div>
      <p>index: {{ index }}</p>
      <vi-radio-group v-model="index">
        <vi-radio :label="0">0</vi-radio>
        <vi-radio :label="1">1</vi-radio>
      </vi-radio-group>
    </div>

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
  data() {
    return {
      index: 1
    };
  },
  computed: {
    formItemsConfig() {
      return this.option.formItemsConfig.filter(item => {
        const { hidden } = item;
        if (hidden === undefined) {
          return true;
        }
        if (typeof hidden === "boolean") {
          return !hidden;
        }
        if (typeof hidden === "function") {
          return !item.hidden(this.context, this);
        }

        return !hidden;
      });
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