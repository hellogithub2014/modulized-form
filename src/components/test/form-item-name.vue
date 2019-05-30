<template>
  <vi-form-item label="name" prop="formItemName">
    <span>{{ name }}</span>
    <div>
      <vi-button @click="updateName">updateName</vi-button>
    </div>
  </vi-form-item>
</template>

<script>
import dfFormItem from "../df-form-item";
import { mapState, mapMutations } from "vuex";

export default {
  name: "form-item-name",
  extends: dfFormItem,
  data() {
    return {
      count: 0
    };
  },
  computed: {
    ...mapState("formItemName", ["name"])
  },
  methods: {
    ...mapMutations("formItemName", ["update"]),
    updateName() {
      this.update({
        name: this.name + `-> ${this.count++}`
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>