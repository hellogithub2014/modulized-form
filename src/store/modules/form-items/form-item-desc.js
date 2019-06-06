export default {
  namespaced: true,
  state: {
    desc: ''
  },
  getters: {
    formItemData ( state ) {
      return {
        c: state.desc
      };
    },
  },
  actions: {
    data2State ( { commit }, formData ) {
      commit( 'update', {
        desc: formData.c
      } )
    }
  }
}