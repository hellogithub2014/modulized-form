import extendsModule from '../extends-module';
import baseFromItem from './base-form-item';
import formItemDesc from './form-item-desc';
import formItemId from './form-item-id'
import formItemName from './form-item-name'
import formItemText from './form-item-text'

export default {
  formItemDesc: extendsModule( formItemDesc, baseFromItem ),
  formItemId: extendsModule( formItemId, baseFromItem ),
  formItemName: extendsModule( formItemName, baseFromItem ),
  formItemText: extendsModule( formItemText, baseFromItem ),
}