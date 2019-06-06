export default {
  namespaced: true,
  state: {
    desc: ''
  },
  getters: {
    formItemData ( state, getters, rootState ) {
      return {
        c: state.desc
      };
    },
  },
  actions: {
    data2State ( { state, commit, rootState }, formData ) {
      commit( 'update', {
        desc: formData.c
      } )
    }
  }
}