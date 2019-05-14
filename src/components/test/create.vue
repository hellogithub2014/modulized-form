<template>
  <div>
    <vi-form class="form" ref="form" :model="dynamicForm.context.formModel" label-width="100px">
      <vi-form-item label="type">
        <vi-select v-model="type" placeholder="请选择">
          <vi-option :label="1" :value="1"></vi-option>
          <vi-option :label="2" :value="2"></vi-option>
          <vi-option :label="3" :value="3"></vi-option>
        </vi-select>
      </vi-form-item>

      <component
        v-for="(item,index) in formGroupsConfig"
        :key="index"
        :is="item.component"
        class="form-group"
        :option="item"
        :title="`Group-${index}`"
        :context="dynamicForm.context"
      />

      <vi-button @click="submit">submit</vi-button>
      <vi-button @click="reset">reset</vi-button>
    </vi-form>
    <p>formData: {{ dynamicForm.context.formData }}</p>
  </div>
</template>

<script>
import dfForm from "../df-form";
import DynamicForm from "../dynamic-form";

import formOption from "./form-option";
import formGroupCommon from "./form-group-common";

export default {
  extends: dfForm,
  components: {
    formGroupCommon
  },
  data() {
    return {
      dynamicForm: new DynamicForm(formOption),
      type: 3
    };
  },
  mounted() {
    this.dynamicForm.resetFormData({
      a: 1,
      b: 2,
      c: 3,
      d: 4
    });
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid, fields) => {
        if (!valid) {
          console.error(fields);
          return;
        }
      });
    },
    reset() {
      this.$refs.form.resetFields();
    }
  }
};
</script>

<style scoped>
.form {
  text-align: left;
}
.form-group {
  border: 1px solid green;
  padding: 10px;
  margin: 10px;
}
</style>
