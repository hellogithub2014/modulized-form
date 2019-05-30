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
        v-for="groupName in visibleFormGroups"
        :ref="groupName"
        :key="groupName"
        :is="groupName"
        class="form-group"
      />

      <vi-button @click="submit">submit</vi-button>
      <vi-button @click="reset">reset</vi-button>
    </vi-form>
    <p>formData: {{ formData }}</p>
  </div>
</template>

<script>
import dfForm from "../df-form";

import formGroup1 from "./form-group-1";
import formGroup2 from "./form-group-2";

export default {
  extends: dfForm,
  components: {
    formGroup1,
    formGroup2
  },
  data() {
    return {
      type: 3,
      formGroups: ["form-group-1", "form-group-2"]
    };
  },
  mounted() {
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
