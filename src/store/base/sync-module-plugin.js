
// 同步表单项module
export default function createSyncPlugin ( namespace ) {
  return store => {
    const getters = store.getters;
    const formItemModuleKeys = getters[ `${ namespace }/formItemModuleKeys` ];
    const moniteTypes = formItemModuleKeys.map( key => `/${ key }/` );

    let dispatched = false; // 避免无限循环

    // 监听所有表单项module的mutation, 更新所有module到最新状态
    store.subscribe( ( mutation ) => {
      const { type = '' } = mutation;
      const index = moniteTypes.findIndex( moniteType => type.includes( moniteType ) );

      // 每次有某个module触发update的mutation时，联动其他module的state更新到最新，因为可能有互相依赖
      if ( index > -1 && !dispatched )
      {
        dispatched = true;
        moniteTypes.forEach( ( _, curIndex ) => {
          if ( curIndex !== index )
          {
            store.dispatch( `${ namespace }/${ formItemModuleKeys[ curIndex ] }/data2State`, store.getters[ `${ namespace }/formData` ] )
          }
        } )
        // setTimeout( () => {
        dispatched = false;
        // }, 0 )
      }
    } );
  };
}
