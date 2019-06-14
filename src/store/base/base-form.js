export default {
  getters: {
    formGroups ( state ) {
      return state._formGroups || [];
    },
    /**
     * 集合表单所有下属表单项的state
     * {
     *   'form-item-1': formItem1State,
     *   'form-item-2': formItem2State
     * }
     */
    formModel ( state, getters ) {
      return getters.formGroups.reduce( ( model, formGroupModuleKey ) => ( {
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
    formData ( state, getters ) {
      return getters.formGroups.reduce( ( data, formGroupModuleKey ) => ( {
        ...data,
        ...getters[ `${ formGroupModuleKey }/formGroupData4Submit` ],
      } ), {} )
    },
    formData4View ( state, getters ) {
      return getters.formGroups.reduce( ( data, formGroupModuleKey ) => ( {
        ...data,
        ...getters[ `${ formGroupModuleKey }/formGroupData4View` ],
      } ), {} )
    },
    isFormGroupVisible ( state, getters ) {
      return formGroupName => getters[ `${ formGroupName }/isSelfVisible` ];
    },
    // 表单所有下属表单项module的namespace path
    formItemModulePaths ( state, getters ) {
      let keys = [];

      getters.formGroups.forEach( formGroupModuleKey => {
        const formItems = getters[ `${ formGroupModuleKey }/formItems` ];
        formItems.forEach( ( formItemModuleKey ) => keys.push( `${ formGroupModuleKey }/${ formItemModuleKey }` ) );
      } );

      return keys;
    },
  },
  actions: {
    initVuexModule ( { dispatch, state, getters } ) {
      // 将自身state分发到下属每个form group
      getters.formGroups.forEach( ( formGroupModuleKey ) => dispatch( `${ formGroupModuleKey }/initState`, state ) );
    },

    fillForm ( { dispatch, getters }, backendData ) {
      // 利用后端数据回填表单，分发到每个form group来做
      getters.formGroups.forEach( ( formGroupModuleKey ) => dispatch( `${ formGroupModuleKey }/fillFormGroup`, backendData ) )
    },
  },
}