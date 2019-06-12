<template>
  <vi-form-item prop="formItemText" label="text">{{ text }}</vi-form-item>
</template>

<script>
import formItemMixin from "../formItemMixin";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "form-item-text",
  mixins: [formItemMixin],
  computed: {
    ...mapGetters("demo", ["formData"]),
    ...mapState("demo/formItemText", ["text"]) // TODO: 此处对所属的form、fromGroup产生了依赖
  },
  methods: {
    ...mapMutations("formItemText", ["update"])
  }
};
</script>

<style lang="scss" scoped>
</style>