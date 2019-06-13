import { extendsModule, baseFormItem } from '../../../base';

export default extendsModule( baseFormItem, {
  state: {
    _moduleKey: 'form-item-text',
    text: '',
  },
  getters: {
    formItemData4Submit ( state ) {
      return {
        text: state.text,
      };
    },
    formItemData4View ( state, getters ) {
      return getters.formItemData4Submit;
    },
  },
  actions: {
    data2State ( { commit }, formData ) {
      commit( 'update', {
        text: formData.text
      } )
    },
  }
} )