<template>
  <vi-form-item :rules="rules" :prop="formItemModel._prop" label="desc">
    <vi-input :value="formItemModel.desc" @blur="updateDesc"></vi-input>
  </vi-form-item>
</template>

<script>
const name = "form-item-desc";
export default {
  name,
  _dynamicFormConfig: {
    component: name,
    data2Model(formData, context) {
      return {
        desc: formData.c
      };
    },
    model2Data(model, context) {
      return {
        c: model.desc
      };
    }
  },
  props: {
    formItemModel: {
      type: Object,
      required: true
    },
    context: {
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
    data2Model(formData, context) {
      return {
        desc: formData.c
      };
    },
    model2Data(model, context) {
      return {
        c: model.desc
      };
    },
    // 这里的value是formModel[prop]，也就是说必须先更新formModel，才能得到最新的value。
    largeThan10(rule, value, callback) {
      if (value.desc < 10) {
        callback(new Error("不能小于10"));
      } else {
        callback();
      }
    },
    updateDesc(event) {
      this.context.dynamicForm.updateFormItemData(name, {
        desc: event.target.value
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>