import { extendsModule, baseFormGroup } from '../../../base';

export default extendsModule( baseFormGroup, {
  state: {
    _moduleKey: 'form-group-1',
    index: 0
  },
  mutations: {
    updateIndex ( state, index ) {
      state.index = index;
    }
  }
} )