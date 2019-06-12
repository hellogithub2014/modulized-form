import { extendsModule, baseForm } from '../../base';

import formItemModules from './form-items';
import formGroupModules from './form-groups';

export default extendsModule( baseForm, {
  state: {
    type: 3
  },
  mutations: {
    updateType ( state, type ) {
      state.type = type;
    },
  },
  modules: {
    ...formItemModules,
    ...formGroupModules,
  },
} );