export default {
  id: 'desc',
  description: 'form item 3',
  component: 'form-item-desc', // 表单项的dom，支持组件名、JSX、返回JSX的函数
  data2Model(formData, context) {
    return {
      desc: formData.c,
    };
  },
  model2Data(model, context) {
    return {
      c: model.desc,
    };
  },
};
