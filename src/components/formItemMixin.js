import { mapGetters } from "vuex";

export default {
  props: {
    formGroupVm: {
      type: Object,
      required: true
    },
    formVm: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters( [ "formData" ] )
  },
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
