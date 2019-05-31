<template>
  <vi-form-item prop="formItemText" label="text">{{ text }}</vi-form-item>
</template>

<script>
import dfFormItem from "../df-form-item";
import { mapState, mapMutations } from "vuex";

export default {
  name: "form-item-text",
  extends: dfFormItem,
  data() {
    return {
      modulePath: "formItemText"
    };
  },
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