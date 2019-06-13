import { extendsModule, baseFormItem } from '../../../base';

export default extendsModule( baseFormItem, {
  state: {
    _moduleKey: 'form-item-desc', // 需要与组件名相同
    id: '',
    desc: ''
  },
  getters: {
    formItemData4Hidden () {
      return {
        desc: "",
      }
    },
    formItemData4Show ( state ) {
      return {
        desc: state.desc
      };
    },
    isVisible ( state ) {
      return state.id !== 10;
    },
  },
  actions: {
    data2State ( { commit }, formData ) {
      commit( 'update', {
        desc: formData.desc,
        id: formData.id,
      } )
    }
  }
} )