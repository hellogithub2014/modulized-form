import { extendsModule, baseFormItem } from '../../../base';

export default extendsModule( baseFormItem, {
  state: {
    _moduleKey: 'form-item-text',
    text: '',
  },
  getters: {
    formItemData4Hidden () {
      return {
        text: '',
      };
    },
    formItemData4Show ( state ) {
      return {
        text: state.text,
      };
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