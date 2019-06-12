export default {
  state () {
    return {
      formItems: [],
      hiddenFormItems: []
    }
  },
  getters: {
    visibleFormItems ( state ) {
      return state.formItems.filter(
        formItemName => !state.hiddenFormItems.includes( formItemName )
      );
    },
    isFormItemVisible ( state ) {
      return ( formItemName ) => !state.hiddenFormItems.includes( formItemName );
    },
  },
  mutations: {
    initFormItems ( state, formItems ) {
      state.formItems = formItems;
    },
    hideFormItem ( state, formItemName ) {
      if ( !state.hiddenFormItems.includes( formItemName ) )
      {
        state.hiddenFormItems.push( formItemName );
      }
    },
    showFormItem ( state, formItemName ) {
      const index = state.hiddenFormItems.indexOf( formItemName );
      if ( index > -1 )
      {
        state.hiddenFormItems.splice( index, 1 );
      }
    },
  },
  actions: {
    toggleFormGroup ( { commit }, hideFunc, groupName ) {
      if ( hideFunc() )
      {
        commit( 'hideFormGroup', groupName, { root: true } )
      } else
      {
        commit( 'showFormGroup', groupName, { root: true } )
      }
    }
  }
};