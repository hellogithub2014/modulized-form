import Vue from 'vue';

export default {
  state () {
    return {
      formItems: [],
    }
  },
  getters: {
    isVisible ( state ) {
      return !state._hidden;
    },
    isFormItemVisible ( state, getters ) {
      return formItemName => getters[ `${ formItemName }/isVisible` ];
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
    formGroupData ( state, getters ) {
      return state.formItems.reduce( ( data, formItemModuleKey ) => ( {
        ...data,
        ...getters[ `${ formItemModuleKey }/formItemData` ]
      } ), {} )
    },
  },
  mutations: {
    // 用于在vuex中管理组件的显式隐藏。 formItemComps: 表单项组件数组.
    initFormItems ( state, formItemComps ) {
      state.formItems = formItemComps.map( comp => comp.name );
    },
    toggleVisible ( state, hideFunc = () => false ) {
      if ( hideFunc() )
      {
        Vue.set( state, '_hidden', true );
      } else
      {
        Vue.set( state, '_hidden', false );
      }
    },
  },
  actions: {
    fillFormGroup ( { state, dispatch }, backendData ) {
      // 每个form item自身决定取哪些数据
      state.formItems.forEach( ( formItemModuleKey ) => dispatch( `${ formItemModuleKey }/data2State`, backendData ) )
    },
  },
};