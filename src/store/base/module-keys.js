export default function ( modules = [] ) {
  return modules.map( m => m.state._moduleKey );
}