export default {
  // namespaced: true,
  state () {
    return {
      hiddenFormGroups: [],
      formGroups: []
    }
  },
  getters: {
    // 用于表单校验
    formModel ( state ) {
      return Object.keys( state.formItemModules ).reduce( ( result, moduleKey ) => {
        return {
          ...result,
          [ moduleKey ]: state[ moduleKey ]
        };
      }, {} );
    },
    // 用于后端接口
    formData ( state, getters ) {
      return Object.keys( state.formItemModules ).reduce( ( result, moduleKey ) => {
        return {
          ...result,
          ...getters[ `${ moduleKey }/formItemData` ]
        };
      }, {} );
    },
    visibleFormGroups ( state ) {
      return state.formGroups.filter(
        groupName => !state.hiddenFormGroups.includes( groupName )
      );
    },
    isFormGroupVisible ( state ) {
      return groupName => !state.hiddenFormGroups.includes( groupName );
    },
  },
  mutations: {
    initFormGroups ( state, formGroups ) {
      state.formGroups = formGroups || [];
    },
    hideFormGroup ( state, groupName ) {
      if ( !state.hiddenFormGroups.includes( groupName ) )
      {
        state.hiddenFormGroups.push( groupName );
      }
    },
    showFormGroup ( state, groupName ) {
      const index = state.hiddenFormGroups.indexOf( groupName );
      if ( index > -1 )
      {
        state.hiddenFormGroups.splice( index, 1 );
      }
    }
  },
  actions: {
    fillForm ( { state, dispatch }, backendData ) {
      Object.keys( state.formItemModules ).forEach( ( moduleKey ) => {
        dispatch( `${ moduleKey }/data2State`, backendData )
      } );
    },
  },
}