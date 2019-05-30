<template>
  <vi-form-item :rules="rules" :prop="_component" label="desc">
    <vi-input :value="desc" @blur="updateDesc"></vi-input>
  </vi-form-item>
</template>

<script>
import dfFormItem from "../df-form-item";
import { mapState, mapMutations } from "vuex";

export default {
  name: "form-item-desc",
  extends: dfFormItem,
  computed: {
    ...mapState("formItemDesc", ["desc"]),
    hidden() {
      return this.formData.a === 10;
    },
    rules() {
      return [
        {
          validator: this.largeThan10,
          trigger: "blur"
        }
      ];
    }
  },
  methods: {
    ...mapMutations("formItemDesc", ["update"]),
    largeThan10(rule, value, callback) {
      if (value.desc < 10) {
        callback(new Error("不能小于10"));
      } else {
        callback();
      }
    },
    updateDesc(event) {
      this.update({
        desc: event.target.value
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>