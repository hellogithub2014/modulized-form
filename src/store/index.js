import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use( Vuex );

const fillPlugin = store => {
  const moduleKeys = Object.keys( modules );
  const moniteTypes = moduleKeys.map( moduleKey => `${ moduleKey }/update` );

  let dispatched = false;

  store.subscribe( ( mutation ) => {
    const { type = '' } = mutation;

    const index = moniteTypes.indexOf( type );

    if ( index > -1 && !dispatched )
    {
      dispatched = true;
      moniteTypes.forEach( ( _, curIndex ) => {
        if ( curIndex !== index )
        {
          store.dispatch( `${ moduleKeys[ curIndex ] }/data2State`, store.getters.formData )
        }
      } )

    }
  } );
};

const store = new Vuex.Store( {
  getters: {
    // 用于表单校验
    formModel ( state, getters ) {
      return Object.keys( modules ).reduce( ( result, moduleKey ) => {
        return {
          ...result,
          [ moduleKey ]: state[ moduleKey ]
        };
      }, {} );
    },
    // 用于后端接口
    formData ( state, getters ) {
      return Object.keys( modules ).reduce( ( result, moduleKey ) => {
        return {
          ...result,
          ...getters[ `${ moduleKey }/formItemData` ]
        };
      }, {} );
    },
  },
  modules,
  actions: {
    fillForm ( { dispatch, commit, getters }, backendData ) {
      Object.keys( modules ).forEach( ( moduleKey ) => {
        dispatch( `${ moduleKey }/data2State`, backendData )
      } );
    },
  },
  // plugins: [ fillPlugin ],
} );

export default store;