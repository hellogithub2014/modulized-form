export default {
  namespaced: true,
  state: {
    text: '',
  },
  getters: {
    formItemData ( state, getters, rootState ) {
      return {
        d: state.text,
      };
    },
  },
  actions: {
    data2State ( { state, commit, rootState }, formData ) {
      commit( 'update', {
        text: formData.d
      } )
    },
  }
}