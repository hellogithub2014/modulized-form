export default function ( modules = [] ) {
  return modules.reduce( ( result, m ) => ( {
    ...result,
    [ m.state._moduleKey ]: m,
  } ), {} );
}