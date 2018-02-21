export default {
    name: "contentB",
    data() {
      return {
        title: "contentB"
      };
    },
    mounted: function() {
      console.log(this.$$.login);
    },
    methods: {
      showName: arg => {
        console.log(arg);
      }
    }
  };