export default {
  namespaced: true,
  state: {
    name: '',
  },
  getters: {
    formItemData ( state ) {
      return {
        name: state.name
      };
    },
  },
  actions: {
    data2State ( { commit }, formData ) {
      commit( 'update', {
        name: formData.name
      } )
    },
  }
}