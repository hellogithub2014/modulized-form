<template>
  <div>
    <h2>Form Group 1</h2>
    <div>
      <p>index: {{ index }}</p>
      <vi-radio-group v-model="index">
        <vi-radio :label="0">0</vi-radio>
        <vi-radio :label="1">1</vi-radio>
      </vi-radio-group>
    </div>

    <component
      v-for="itemName in formItems"
      v-show="isFormItemVisible(itemName)"
      :ref="itemName"
      :key="itemName"
      :is="itemName"
      class="form-item"
      @hide="hideFormItem(itemName)"
      @show="showFormItem(itemName)"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

import formGroupMixin from "../formGroupMixin";
import formItemId from "./form-item-id";
import formItemName from "./form-item-name";

export default {
  name: "form-group-1",
  mixins: [formGroupMixin],
  components: {
    formItemId,
    formItemName
  },
  computed: {
    ...mapState("demo", ["type"]),
    ...mapState("demo/formGroup1", ["formItems", "index"]),
    ...mapGetters("demo/formGroup1", ["isFormItemVisible"])
  },
  mounted() {
    this.initFormItems(["form-item-id", "form-item-name"]);
  },
  watch: {
    type: {
      handler(value) {
        this.toggleVisible(() => value === 1);
      }
    },
    immediate: true
  },
  methods: {
    ...mapMutations("demo/formGroup1", [
      "initFormItems",
      "hideFormItem",
      "showFormItem"
    ])
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