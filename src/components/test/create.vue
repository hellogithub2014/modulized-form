<template>
  <vi-form :model="dynamicForm.context.formModel" label-width="100px">
    <df-form-group
      v-for="(item,index) in dynamicForm.context.formGroupsConfig"
      :key="index"
      class="form-group"
      :option="item"
      :context="dynamicForm.context"
    />
    <p>formData: {{ dynamicForm.context.formData }}</p>
  </vi-form>
</template>

<script>
import DynamicForm from "../dynamic-form";
import formOption from "./form";
import dfFormGroup from "./df-form-group";

export default {
  components: {
    dfFormGroup
  },
  data() {
    return {
      dynamicForm: new DynamicForm(formOption)
    };
  },
  mounted() {
    this.dynamicForm.resetFormData({
      a: 1,
      b: 2,
      c: 3,
      d: 4
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
