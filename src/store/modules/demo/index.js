import { extendsModule, baseForm, registerModule, moduleKeys } from '../../base';
import formGroup1 from './form-group-1';
import formGroup2 from './form-group-2';

export default extendsModule( baseForm, {
  state: {
    _moduleKey: 'demo',
    _formGroups: moduleKeys( [ formGroup1, formGroup2 ] ),
    type: 3,
  },
  mutations: {
    updateType ( state, type ) {
      state.type = type;
    },
  },
  modules: registerModule( [ formGroup1, formGroup2 ] ),
} );