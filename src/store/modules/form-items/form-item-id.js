export default {
  namespaced: true,
  state: {
    id: '',
    name: '',
  },
  getters: {
    formItemData ( state ) {
      return {
        a: +state.id
      };
    },
  },
  actions: {
    data2State ( { commit }, formData ) {
      commit( 'update', {
        id: formData.a,
        name: formData.b
      } )
    }
  }
}