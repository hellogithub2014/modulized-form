export default {
  namespaced: true,
  state: {
    text: '',
  },
  getters: {
    formItemData ( state ) {
      return {
        d: state.text,
      };
    },
  },
  actions: {
    data2State ( { commit }, formData ) {
      commit( 'update', {
        text: formData.d
      } )
    },
  }
}