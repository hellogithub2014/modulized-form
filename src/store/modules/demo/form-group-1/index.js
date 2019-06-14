import { extendsModule, baseFormGroup, registerModule, moduleKeys } from '../../../base';
import formItemId from './form-item-id'
import formItemName from './form-item-name'

export default extendsModule( baseFormGroup, {
  state: {
    _moduleKey: 'form-group-1',
    _formItems: moduleKeys( [ formItemId, formItemName ] ),
    index: 0
  },
  getters: {
    isVisible ( state, getters ) {
      return getters.formState.type !== 1;
    },
  },
  mutations: {
    updateIndex ( state, index ) {
      state.index = index;
    }
  },
  modules: registerModule( [ formItemId, formItemName ] ),
} )