import { extendsModule, baseForm } from '../../base';
import formGroup1 from './form-group-1';
import formGroup2 from './form-group-2';

export default extendsModule( baseForm, {
  state: {
    _moduleKey: 'demo',
    type: 3,
  },
  mutations: {
    updateType ( state, type ) {
      state.type = type;
    },
  },
  modules: {
    [ formGroup1.state._moduleKey ]: formGroup1,
    [ formGroup2.state._moduleKey ]: formGroup2,
  },
} );