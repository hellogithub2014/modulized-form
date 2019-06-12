export default {
  state () {
    return {
      formItems: [],
    }
  },
  getters: {
    getFormItemIndex ( state ) {
      return formItemName => {
        return state.formItems.findIndex( ( { name } ) => name === formItemName );
      }
    },
    getFormItem ( state ) {
      return formItemName => {
        return state.formItems.find( ( { name } ) => name === formItemName );
      }
    },
    isFormItemVisible ( state, getters ) {
      return formItemName => {
        const target = getters.getFormItem( formItemName );
        if ( !target )
        {
          return false;
        }
        return !target.hidden;
      }
    },
  },
  mutations: {
    // 用于在vuex中管理组件的显式隐藏。 formItemComps: 表单项组件数组.
    initFormItems ( state, formItemComps ) {
      state.formItems = formItemComps.map( comp => ( { name: comp.name, hidden: false } ) );
    },
    toggleFormItem ( state, { index, hidden } ) {
      if ( index > -1 )
      {
        state.formItems.splice( index, 1, {
          ...state.formItems[ index ],
          hidden: !!hidden,
        } );
      }
    },
  },
  actions: {
    hideFormItem ( { getters, commit }, formItemName ) {
      commit( "toggleFormItem", {
        index: getters.getFormItemIndex( formItemName ),
        hidden: true,
      } )
    },
    showFormItem ( { getters, commit }, formItemName ) {
      commit( "toggleFormItem", {
        index: getters.getFormItemIndex( formItemName ),
        hidden: false,
      } )
    },
  }
};