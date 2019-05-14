<template>
  <div>
    <h2>{{ title }}</h2>
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
import dfFormGroup from "../df-form-group";
import formItemId from "./form-item-id";
import formItemName from "./form-item-name";
import formItemDesc from "./form-item-desc";
import formItemText from "./form-item-text";

export default {
  name: "form-group-common",
  extends: dfFormGroup,
  components: {
    formItemId,
    formItemName,
    formItemDesc,
    formItemText
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      index: 1
    };
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