<template>
    <div id="contentD">
        <h1 @click="showName(title)">{{title}}</h1>
    </div>
</template>
<script>
export default {
  name: "contentD",
  data() {
    return {
      title: "contentD"
    };
  },
  mounted: function() {
    // console.log("contentD");
  },
  methods: {
    showName: arg => {
      console.log(arg);
    }
  }
};
</script>