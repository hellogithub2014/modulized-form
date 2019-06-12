import { extendsModule, baseForm } from '../../base';

import formItemModules from './form-items';
import formGroupModules from './form-groups';

export default extendsModule( baseForm, {
  // TODO: 尝试去掉state里的module声明
  state: {
    formItemModules,
    formGroupModules,
  },
  modules: {
    ...formItemModules,
    ...formGroupModules,
  },
} );