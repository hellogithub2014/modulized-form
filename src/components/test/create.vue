<template>
  <div>
    <vi-form class="form" ref="form" :model="formModel" label-width="100px">
      <vi-form-item label="type">
        <vi-select v-model="type" placeholder="请选择">
          <vi-option :label="1" :value="1"></vi-option>
          <vi-option :label="2" :value="2"></vi-option>
          <vi-option :label="3" :value="3"></vi-option>
        </vi-select>
      </vi-form-item>

      <component
        v-for="groupName in formGroups"
        v-show="isFormGroupVisible(groupName)"
        :ref="groupName"
        :key="groupName"
        :is="groupName"
        :formVm="formVm"
        class="form-group"
        @hide="hideFormGroup(groupName)"
        @show="showFormGroup(groupName)"
      ></component>

      <vi-button @click="submit">submit</vi-button>
      <vi-button @click="reset">reset</vi-button>
    </vi-form>
    <p>formData: {{ formData }}</p>
  </div>
</template>

<script>
import formMixin from "../formMixin";

import formGroup1 from "./form-group-1";
import formGroup2 from "./form-group-2";

export default {
  mixins: [formMixin],
  components: {
    formGroup1,
    formGroup2
  },
  data() {
    return {
      type: 3
    };
  },
  mounted() {
    this.initFormGroups(["form-group-1", "form-group-2"]); // 数组内部传递gorm-group组件id

    this.fillForm({
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
