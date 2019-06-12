<template>
  <vi-form-item :rules="rules" prop="formItemDesc" label="desc">
    <vi-input :value="desc" @blur="updateDesc"></vi-input>
  </vi-form-item>
</template>

<script>
import formItemMixin from "../formItemMixin";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "form-item-desc",
  mixins: [formItemMixin],
  computed: {
    ...mapGetters("demo", ["formData"]),
    ...mapState("demo/formItemDesc", ["desc"]),
    rules() {
      return [
        {
          validator: this.largeThan10,
          trigger: "blur"
        }
      ];
    }
  },
  watch: {
    "formData.id": {
      handler(value) {
        this.toggleVisible(() => value === 10);
      }
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