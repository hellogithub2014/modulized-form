export default {
  namespaced: true,
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