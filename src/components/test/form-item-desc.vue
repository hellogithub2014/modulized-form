<template>
  <vi-form-item :rules="rules" prop="form-item-desc" label="desc">
    <h4>formData4View.id===10时隐藏</h4>
    <vi-input :value="desc" @blur="updateDesc"></vi-input>
  </vi-form-item>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "form-item-desc",
  computed: {
    ...mapState("demo/form-group-2/form-item-desc", ["desc"]),
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
    ...mapMutations("demo/form-group-2/form-item-desc", ["update"]),
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