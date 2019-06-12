import { extendsModule, baseFormItem } from '../../../base';

export default extendsModule( baseFormItem, {
  state: {
    _moduleKey: 'form-item-id',
    id: '',
    name: '',
  },
  getters: {
    formItemData4Submit ( state ) {
      return {
        id: +state.id
      };
    },
    formItemData4View ( state ) {
      return {
        id: +state.id
      };
    },
  },
  actions: {
    data2State ( { commit }, formData ) {
      commit( 'update', {
        id: formData.id,
        name: formData.name
      } )
    }
  }
} )