<template>
  <vi-form-item prop="form-item-text" label="text">{{ text }}</vi-form-item>
</template>

<script>
import formItemMixin from "../formItemMixin";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "form-item-text",
  mixins: [formItemMixin],
  computed: {
    ...mapGetters("demo", ["formData"]),
    ...mapState("demo/form-item-text", ["text"])
  },
  methods: {
    ...mapMutations("demo/form-item-text", ["update"])
  }
};
</script>

<style lang="scss" scoped>
</style>