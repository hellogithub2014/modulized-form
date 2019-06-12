<template>
  <vi-form-item label="name" prop="form-item-name">
    <span>{{ name }}</span>
    <div>
      <vi-button @click="updateName">updateName</vi-button>
    </div>
  </vi-form-item>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "form-item-name",
  computed: {
    ...mapState("demo/form-group-1/form-item-name", ["name", "count"])
  },
  methods: {
    ...mapMutations("demo/form-group-1/form-item-name", ["update", "addCount"]),
    updateName() {
      this.addCount();

      this.update({
        name: this.name + `-> ${this.count}`
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>