<template>
  <div>
    <form-group
      v-for="(item,index) in dynamicForm.context.groupOptions"
      :key="index"
      class="form-group"
      :option="item"
      :context="dynamicForm.context"
    />
  </div>
</template>

<script>
import DynamicForm from "../dynamic-form";
import formOption from "./form";
import formGroup from "./form-group";

export default {
  components: {
    formGroup
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
      c: 3
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
