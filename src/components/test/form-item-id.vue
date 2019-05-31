<template>
  <vi-form-item prop="formItemId" label="id">
    <vi-input :value="id" @blur="updateId"></vi-input>
    <p>name: {{ name }}</p>
  </vi-form-item>
</template>

<script>
import dfFormItem from "../df-form-item";
import { mapState, mapMutations } from "vuex";

export default {
  name: "form-item-id",
  extends: dfFormItem,
  computed: {
    ...mapState("formItemId", ["id", "name"])
  },
  watch: {
    "formGroupVm.index": {
      handler(value) {
        this.toggle(() => value === 1);
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations("formItemId", ["update"]),
    updateId(event) {
      this.update({
        id: event.target.value
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>