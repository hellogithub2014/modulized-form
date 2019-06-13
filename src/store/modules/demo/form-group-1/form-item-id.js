import { extendsModule, baseFormItem } from '../../../base';

export default extendsModule( baseFormItem, {
  state: {
    _moduleKey: 'form-item-id',
    id: '',
    name: '',
  },
  getters: {
    formItemData4Hide () {
      return {
        id: ''
      }
    },
    formItemData4Show ( state ) {
      return {
        id: +state.id
      };
    },
    isVisible ( state, getters ) {
      return getters.formGroupState.index !== 1;
    }
  },
  actions: {
    data2State ( { commit }, formData ) {
      commit( 'update', {
        id: formData.id,
        name: formData.name,
      } )
    }
  }
} )