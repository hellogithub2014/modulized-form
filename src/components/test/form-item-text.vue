<template>
  <vi-form-item prop="form-item-text" label="text">{{ text }}</vi-form-item>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "form-item-text",
  computed: {
    ...mapGetters("demo", ["formData"]),
    ...mapState("demo/form-group-2/form-item-text", ["text"])
  },
  methods: {
    ...mapMutations("demo/form-group-2/form-item-text", ["update"])
  }
};
</script>

<style lang="scss" scoped>
</style>