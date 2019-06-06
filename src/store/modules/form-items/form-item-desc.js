export default {
  namespaced: true,
  state: {
    desc: ''
  },
  getters: {
    formItemData ( state ) {
      return {
        desc: state.desc
      };
    },
  },
  actions: {
    data2State ( { commit }, formData ) {
      commit( 'update', {
        desc: formData.desc
      } )
    }
  }
}