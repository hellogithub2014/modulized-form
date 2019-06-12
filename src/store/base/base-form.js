
const fillPlugin = store => {
  const moduleKeys = Object.keys( store.state.formItemModules );
  const moniteTypes = moduleKeys.map( moduleKey => `${ moduleKey }/` );

  let dispatched = false; // 避免无限循环

  // 监听所有表单项module的mutation, 更新所有module到最新状态
  store.subscribe( ( mutation ) => {
    const { type = '' } = mutation;
    const index = moniteTypes.findIndex( moniteType => type.startsWith( moniteType ) );

    // 每次有某个module触发update的mutation时，联动其他module的state更新到最新，因为可能有互相依赖
    if ( index > -1 && !dispatched )
    {
      dispatched = true;
      moniteTypes.forEach( ( _, curIndex ) => {
        if ( curIndex !== index )
        {
          store.dispatch( `${ moduleKeys[ curIndex ] }/data2State`, store.getters.formData )
        }
      } )
      setTimeout( () => {
        dispatched = false;
      }, 0 )
    }
  } );
};

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
  plugins: [ fillPlugin ],
}