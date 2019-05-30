<template>
  <vi-form-item label="text">{{ text }}</vi-form-item>
</template>

<script>
import dfFormItem from "../df-form-item";
import { mapState, mapMutations } from "vuex";

export default {
  name: "form-item-text",
  extends: dfFormItem,
  computed: {
    ...mapState("formItemText", ["text"])
  },
  methods: {
    ...mapMutations("formItemText", ["update"])
  }
};
</script>

<style lang="scss" scoped>
</style>