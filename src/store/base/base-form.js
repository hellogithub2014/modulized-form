export default {
  state () {
    return {
      formGroups: []
    }
  },
  getters: {
    /**
     * 集合表单所有下属表单项的state
     * {
     *   'form-item-1': formItem1State,
     *   'form-item-2': formItem2State
     * }
     */
    formModel ( state, getters ) {
      return state.formGroups.reduce( ( model, formGroupModuleKey ) => ( {
        ...model,
        ...getters[ `${ formGroupModuleKey }/formGroupModel` ],
      } ), {} )
    },
    /**
     * 表单用于后端接口提交的数据, 所有数据全部打平
     * {
     *   key1: value1,
     *   key2: value2,
     *   key3: value3,
     * }
     */
    formData4Submit ( state, getters ) {
      return state.formGroups.reduce( ( data, formGroupModuleKey ) => ( {
        ...data,
        ...getters[ `${ formGroupModuleKey }/formGroupData4Submit` ],
      } ), {} )
    },
    formData4View ( state, getters ) {
      return state.formGroups.reduce( ( data, formGroupModuleKey ) => ( {
        ...data,
        ...getters[ `${ formGroupModuleKey }/formGroupData4View` ],
      } ), {} )
    },
    isFormGroupVisible ( state, getters ) {
      return formGroupName => {
        const target = getters[ `${ formGroupName }/isVisible` ];
        if ( target === undefined )
        {
          return true;
        }
        return !!target;
      }
    },
    // 表单所有下属表单项module的namespace path
    formItemModulePaths ( state ) {
      let keys = [];

      state.formGroups.forEach( formGroupModuleKey => {
        const { formItems = [] } = state[ formGroupModuleKey ];
        formItems.forEach( ( formItemModuleKey ) => keys.push( `${ formGroupModuleKey }/${ formItemModuleKey }` ) );
      } );

      return keys;
    },
  },
  mutations: {
    // 用于在vuex中管理组件的显式隐藏。 formGroupComps: formGroup组件数组.
    initFormGroups ( state, formGroupComps = [] ) {
      state.formGroups = formGroupComps.map( comp => comp.name );
    },
  },
  actions: {
    initFormGroups ( { dispatch, state, commit }, formGroupComps = [] ) {
      commit( 'initFormGroups', formGroupComps );

      setTimeout( () => {
        // 将自身state分发到下属每个form group
        state.formGroups.forEach( ( formGroupModuleKey ) => dispatch( `${ formGroupModuleKey }/initState`, state ) );
      } )
    },

    fillForm ( { dispatch, state }, backendData ) {
      setTimeout( () => {
        // 利用后端数据回填表单，分发到每个form group来做
        state.formGroups.forEach( ( formGroupModuleKey ) => dispatch( `${ formGroupModuleKey }/fillFormGroup`, backendData ) )
      } )
    },
  },
}