<template>
  <div>
    <vi-form class="form" ref="form" :model="formModel" label-width="100px">
      <vi-form-item label="type">
        <vi-select :value="type" @change="updateType" placeholder="请选择">
          <vi-option :label="1" :value="1"></vi-option>
          <vi-option :label="2" :value="2"></vi-option>
          <vi-option :label="3" :value="3"></vi-option>
        </vi-select>
      </vi-form-item>

      <component
        v-for="formGroup in formGroups"
        v-show="isFormGroupVisible(formGroup)"
        :key="formGroup"
        :is="formGroup"
        class="form-group"
      ></component>

      <vi-button @click="submit">submit</vi-button>
      <vi-button @click="reset">reset</vi-button>
    </vi-form>
    <p>formData: {{ formData }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import formGroup1 from "./form-group-1";
import formGroup2 from "./form-group-2";

export default {
  components: {
    formGroup1,
    formGroup2
  },
  computed: {
    ...mapState("demo", ["formGroups", "type"]),
    ...mapGetters("demo", ["formData", "formModel", "isFormGroupVisible"])
  },
  mounted() {
    this.initFormGroups([formGroup1, formGroup2]);

    this.fillForm({
      id: 1,
      name: 2,
      desc: 3,
      text: 4
    });
  },
  methods: {
    ...mapMutations("demo", ["initFormGroups", "updateType"]),
    ...mapActions("demo", ["fillForm"]),
    submit() {
      this.$refs.form.validate(valid => {
        if (!valid) {
          return;
        }
        this.$message.success("submitted!!");
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
