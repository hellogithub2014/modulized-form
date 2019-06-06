import extendsModule from '../extends-module';
import baseFormGroup from './base-form-group';
import formGroup1 from './form-group1';
import formGroup2 from './form-group2';

export default {
  'formGroup1': extendsModule( formGroup1, baseFormGroup ),
  'formGroup2': extendsModule( formGroup2, baseFormGroup ),
}