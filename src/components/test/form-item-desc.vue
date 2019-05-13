<template>
  <vi-form-item :rules="rules" :prop="config.id" label="desc">
    <vi-input :value="config.data.desc"></vi-input>
  </vi-form-item>
</template>

<script>
export default {
  name: "form-item-desc",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  computed: {
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
    // 这里的value是formModel[prop]，也就是说必须先更新formModel，才能得到最新的value。
    largeThan10(rule, value, callback) {
      if (value.desc < 10) {
        callback(new Error("不能小于10"));
      } else {
        callback();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>