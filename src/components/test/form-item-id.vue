<template>
  <vi-form-item prop="formItemId" label="id">
    <vi-input :value="id" @blur="updateId"></vi-input>
    <p>name: {{ name }}</p>
  </vi-form-item>
</template>

<script>
import formItemMixin from "../formItemMixin";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "form-item-id",
  mixins: [formItemMixin],
  computed: {
    ...mapGetters("demo", ["formData"]),
    ...mapState("demo/form-group-1", ["index"]),
    ...mapState("demo/form-item-id", ["id", "name"])
  },
  watch: {
    index: {
      handler(value) {
        this.toggleVisible(() => value === 1);
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations("demo/form-item-id", ["update"]),
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