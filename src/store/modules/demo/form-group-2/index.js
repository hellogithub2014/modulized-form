import { extendsModule, baseFormGroup } from '../../../base';
import formItemDesc from './form-item-desc';
import formItemText from './form-item-text'

export default extendsModule( baseFormGroup, {
  state: {
    _moduleKey: 'form-group-2',
  },
  modules: {
    [ formItemDesc.state._moduleKey ]: formItemDesc,
    [ formItemText.state._moduleKey ]: formItemText
  }
} );