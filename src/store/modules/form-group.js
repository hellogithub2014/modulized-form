export default {
  state: {
    formItems: [],
    hiddenFormItems: []
  },
  getters: {
    visibleFormItems ( state ) {
      return state.formItems.filter(
        itemName => !state.hiddenFormItems.includes( itemName )
      );
    },
    isFormItemVisible ( state ) {
      return ( itemName ) => !state.hiddenFormItems.includes( itemName );
    },
  },
  mutations: {
    initFormItems ( state, formItems ) {
      state.formItems = formItems;
    },
    hideFormItem ( state, itemName ) {
      if ( !state.hiddenFormItems.includes( itemName ) )
      {
        state.hiddenFormItems.push( itemName );
      }
    },
    showFormItem ( state, itemName ) {
      const index = state.hiddenFormItems.indexOf( itemName );
      if ( index > -1 )
      {
        state.hiddenFormItems.splice( index, 1 );
      }
    },
  },
  actions: {
    toggleVisible ( { commit, dispatch }, hideFunc ) {
      if ( hideFunc() )
      {
        dispatch( "hide" ); // TODO: 调用root的action
      } else
      {
        dispatch( "show" );
      }
    }
  }
};