export default {
  namespaced: true,
  state: {
    name: '',
  },
  getters: {
    formItemData ( state ) {
      return {
        b: state.name
      };
    },
  },
  actions: {
    data2State ( { commit }, formData ) {
      commit( 'update', {
        name: formData.b
      } )
    },
  }
}