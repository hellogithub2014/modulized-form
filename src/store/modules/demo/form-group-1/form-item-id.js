import { extendsModule, baseFormItem } from '../../../base';

export default extendsModule( baseFormItem, {
  state: {
    _moduleKey: 'form-item-id',
    id: '',
    name: '',
  },
  getters: {
    formItemData4Submit ( state, getters ) {
      if ( getters.isVisible )
      {
        return getters.formItemData4View;
      }

      return {
        id: ''
      }
    },
    formItemData4View ( state ) {
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