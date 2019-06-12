import { extendsModule, baseFormItem } from '../../../base';

export default extendsModule( baseFormItem, {
  state: {
    _moduleKey: 'form-item-desc', // 需要与组件名相同
    desc: ''
  },
  getters: {
    formItemData ( state, getters ) {
      if ( getters.isVisible )
      {
        return {
          desc: state.desc
        };
      }

      return {
        desc: "",
      }
    },
  },
  actions: {
    data2State ( { commit }, formData ) {
      commit( 'update', {
        desc: formData.desc
      } )
    }
  }
} )