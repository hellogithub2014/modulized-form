import Vue from 'vue';

export default {
  state () {
    return {
      _formState: {},
      formItems: [],
    }
  },
  getters: {
    formState ( state ) {
      return state._formState;
    },
    isFormItemVisible ( state, getters ) {
      return formItemName => {
        const target = getters[ `${ formItemName }/isVisible` ];
        if ( target === undefined )
        {
          return true;
        }
        return !!target;
      };
    },
    /**
     * 集合form group所有下属表单项的state
     * {
     *   'form-item-1': formItem1State,
     *   'form-item-2': formItem2State
     * }
     */
    formGroupModel ( state ) {
      return state.formItems.reduce( ( model, formItemModuleKey ) => ( {
        ...model,
        [ formItemModuleKey ]: state[ formItemModuleKey ],
      } ), {} )
    },
    /**
     * form group用于后端接口提交的数据, 所有数据全部打平
     * {
     *   key1: value1,
     *   key2: value2,
     *   key3: value3,
     * }
     */
    formGroupData4Submit ( state, getters ) {
      return state.formItems.reduce( ( data, formItemModuleKey ) => ( {
        ...data,
        ...getters[ `${ formItemModuleKey }/formItemData4Submit` ]
      } ), {} )
    },
    formGroupData4View ( state, getters ) {
      return state.formItems.reduce( ( data, formItemModuleKey ) => ( {
        ...data,
        ...getters[ `${ formItemModuleKey }/formItemData4View` ]
      } ), {} )
    },
  },
  mutations: {
    // 用于在vuex中管理组件的显式隐藏。 formItemComps: 表单项组件数组.
    initFormItems ( state, formItemComps ) {
      state.formItems = formItemComps.map( comp => comp.name );
    },
    saveFormState ( state, formState ) {
      Vue.set( state, '_formState', formState );
    },
  },
  actions: {
    initState ( { state, commit }, formState ) {
      commit( 'saveFormState', formState );

      state.formItems.forEach( ( formItemModuleKey ) => {
        commit( `${ formItemModuleKey }/saveFormState`, formState );
        commit( `${ formItemModuleKey }/saveFormGroupState`, state );
      } );
    },
    fillFormGroup ( { state, dispatch }, formData ) {
      // 每个form item自身决定取哪些数据
      state.formItems.forEach( ( formItemModuleKey ) => {
        dispatch( `${ formItemModuleKey }/data2State`, formData );
      } );
    },
  },
};