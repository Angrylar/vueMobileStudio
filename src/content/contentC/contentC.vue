<template>
    <div id="contentC">
        <h1 @click="showName(title)">{{title}}</h1>
    </div>
</template>
<script>
export default {
  name: "contentC",
  data() {
    return {
      title: "contentC"
    };
  },
  mounted: function() {
    // console.log("contentC");
  },
  methods: {
    showName: arg => {
      console.log(arg);
    }
  }
};
</script>