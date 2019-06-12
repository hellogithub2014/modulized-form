<template>
  <vi-form-item label="name" prop="formItemName">
    <span>{{ name }}</span>
    <div>
      <vi-button @click="updateName">updateName</vi-button>
    </div>
  </vi-form-item>
</template>

<script>
import formItemMixin from "../formItemMixin";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "form-item-name",
  mixins: [formItemMixin],
  computed: {
    ...mapGetters("demo", ["formData"]),
    ...mapState("demo/formGroup1/formItemName", ["name", "count"])
  },
  methods: {
    ...mapMutations("demo/formGroup1/formItemName", ["update", "addCount"]),
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