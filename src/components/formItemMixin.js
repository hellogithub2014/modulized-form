export default {
  methods: {
    toggleVisible ( hideFunc ) {
      if ( hideFunc() )
      {
        this.$emit( "hide" );
      } else
      {
        this.$emit( "show" );
      }
    }
  }
};
