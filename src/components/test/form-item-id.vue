<template>
  <vi-form-item prop="formItemId" label="id">
    <vi-input :value="id" @blur="updateId"></vi-input>
    <p>name: {{ name }}</p>
  </vi-form-item>
</template>

<script>
import formItemMixin from "../formItemMixin";
import { mapState, mapMutations } from "vuex";

export default {
  name: "form-item-id",
  mixins: [formItemMixin],
  computed: {
    ...mapState("formItemId", ["id", "name"])
  },
  watch: {
    "formGroupVm.index": {
      handler(value) {
        this.toggleVisible(() => value === 1);
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