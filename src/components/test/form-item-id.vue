<template>
  <vi-form-item :prop="_component" label="id">
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
    ...mapState("formItemId", ["id", "name"]),
    hidden() {
      return this.formGroupVm.index === 1;
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