<template>
  <vi-form-item prop="formItemText" label="text">{{ text }}</vi-form-item>
</template>

<script>
import formItemMixin from "../formItemMixin";
import { mapState, mapMutations } from "vuex";

export default {
  name: "form-item-text",
  mixins: [formItemMixin],
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