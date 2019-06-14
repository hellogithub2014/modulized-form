import { extendsModule, baseFormGroup, registerModule, moduleKeys } from '../../../base';
import formItemDesc from './form-item-desc';
import formItemText from './form-item-text'

export default extendsModule( baseFormGroup, {
  state: {
    _moduleKey: 'form-group-2',
    _formItems: moduleKeys( [ formItemText, formItemDesc ] ),
  },
  modules: registerModule( [ formItemDesc, formItemText ] )
} );