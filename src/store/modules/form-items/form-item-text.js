export default {
  namespaced: true,
  state: {
    text: '',
  },
  getters: {
    formItemData ( state ) {
      return {
        text: state.text,
      };
    },
  },
  actions: {
    data2State ( { commit }, formData ) {
      commit( 'update', {
        text: formData.text
      } )
    },
  }
}