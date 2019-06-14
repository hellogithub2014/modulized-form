<template>
  <!-- prop就是组件name -->
  <vi-form-item prop="form-item-id" label="id">
    <h4>form-group-1.index ===1时隐藏</h4>
    <vi-input :value="id" @blur="updateId"></vi-input>
    <p>name: {{ name }}</p>
  </vi-form-item>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "form-item-id",
  computed: {
    ...mapState("demo/form-group-1/form-item-id", ["id", "name"])
  },
  methods: {
    ...mapMutations("demo/form-group-1/form-item-id", ["update"]),
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