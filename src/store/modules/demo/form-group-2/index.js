import { extendsModule, baseFormGroup, registerModule } from '../../../base';
import formItemDesc from './form-item-desc';
import formItemText from './form-item-text'

export default extendsModule( baseFormGroup, {
  state: {
    _moduleKey: 'form-group-2',
  },
  modules: registerModule( [ formItemDesc, formItemText ] )
} );