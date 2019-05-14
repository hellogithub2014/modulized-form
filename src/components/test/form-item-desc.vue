<template>
  <vi-form-item :rules="rules" :prop="formItemModel._component" label="desc">
    <vi-input :value="formItemModel.desc" @blur="updateDesc"></vi-input>
  </vi-form-item>
</template>

<script>
import dfFormItem from "../df-form-item";

const name = "form-item-desc";
export default {
  name,
  extends: dfFormItem,
  _dynamicFormConfig: {
    component: name,
    // formGroupVm：item组件所在form group组件的vm
    hidden(context, formGroupVm) {
      return context.formData.a === 10;
    },
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
    },
    updateDesc(event) {
      this.updateFormItemData({
        desc: event.target.value
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>