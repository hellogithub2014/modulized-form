import { extendsModule, baseFormGroup } from '../../../base';

export default extendsModule( baseFormGroup, {
  state: {
    index: 0
  },
  mutations: {
    updateIndex ( state, index ) {
      state.index = index;
    }
  }
} )