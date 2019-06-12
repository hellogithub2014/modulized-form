export default {
  state () {
    return {
      formGroups: []
    }
  },
  getters: {
    // 集合了所有下属表单项的state
    formModel ( state, getters ) {
      return getters.formItemModuleKeys.reduce( ( model, formItemModuleKey ) => ( {
        ...model,
        [ formItemModuleKey ]: state[ formItemModuleKey ],
      } ), {} )
    },
    // 用于后端接口
    formData ( state, getters ) {
      return getters.formItemModuleKeys.reduce( ( data, formItemModuleKey ) => ( {
        ...data,
        ...getters[ `${ formItemModuleKey }/formItemData` ]
      } ), {} )
    },
    getFormGroupIndex ( state ) {
      return formGroupName => {
        return state.formGroups.findIndex( ( { name } ) => name === formGroupName );
      }
    },
    getFormGroup ( state ) {
      return formGroupName => {
        return state.formGroups.find( ( { name } ) => name === formGroupName );
      }
    },
    isFormGroupVisible ( state, getters ) {
      return formGroupName => {
        const target = getters.getFormGroup( formGroupName );
        if ( !target )
        {
          return false;
        }
        return !target.hidden;
      }
    },
    // 所有下属表单项module的key
    formItemModuleKeys ( state ) {
      let keys = [];

      state.formGroups.forEach( ( { name: formGroupModuleKey } ) => {
        const { formItems = [] } = state[ formGroupModuleKey ];
        formItems.forEach( ( { name: formItemModuleKey } ) => keys.push( formItemModuleKey ) );
      } );

      return keys;
    },
    // 一个便捷方法，用于下属任意一个formItemModule判断自身是否显示，而不用写死namespace来查询
    isFormItemVisible ( state, getters ) {
      return formItemName => {
        let visible = false;
        for ( const formGroup of state.formGroups )
        {
          // 当所属的form group是隐藏的时，认为下属form item也是隐藏的
          if ( formGroup.hidden )
          {
            continue;
          }
          // 无脑查询此form item在当前form group中是否为显示的，不在其下也一并返回false
          if ( getters[ `${ formGroup.name }/isFormItemVisible` ]( formItemName ) )
          {
            visible = true;
            break;
          }
        }
        return visible;
      }
    },
  },
  mutations: {
    // 用于在vuex中管理组件的显式隐藏。 formGroupComps: formGroup组件数组.
    initFormGroups ( state, formGroupComps = [] ) {
      state.formGroups = formGroupComps.map( comp => ( { name: comp.name, hidden: false } ) );
    },
    toggleFormGroup ( state, { index, hidden } ) {
      if ( index > -1 )
      {
        state.formGroups.splice( index, 1, {
          ...state.formGroups[ index ],
          hidden: !!hidden,
        } );
      }
    },
  },
  actions: {
    hideFormGroup ( { getters, commit }, formGroupName ) {
      commit( "toggleFormGroup", {
        index: getters.getFormGroupIndex( formGroupName ),
        hidden: true,
      } )
    },
    showFormGroup ( { getters, commit }, formGroupName ) {
      commit( "toggleFormGroup", {
        index: getters.getFormGroupIndex( formGroupName ),
        hidden: false,
      } )
    },
    fillForm ( { dispatch, getters }, backendData ) {
      setTimeout( () => {
        getters.formItemModuleKeys.forEach( ( formItemModuleKey ) => dispatch( `${ formItemModuleKey }/data2State`, backendData ) )
      } )
    },
  },
}