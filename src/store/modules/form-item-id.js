export default {
  state: {
    id: '',
    name: '',
  },
  getters: {
    formItemData ( state, getters, rootState ) {
      return {
        a: +state.id
      };
    },
    hidden ( state, getters, rootState ) {
      // TODO: 获取vm上的属性进行判断
      // return formGroupVm.index === 1;
      return false;
    }
  },
  mutations: {
    update ( state, newState ) {
      state = {
        ...state,
        ...newState,
      };
    },
  },
  actions: {
    data2State ( { state, commit, rootState }, formData ) {
      commit( 'update', {
        id: formData.a,
        name: formData.b
      } )
    }
  }
}