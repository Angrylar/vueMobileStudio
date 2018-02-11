<template>
    <div id="contentB">
        <h1 @click="showName(title)">{{title}}</h1>
    </div>
</template>
<script>
export default {
  name: "contentB",
  data() {
    return {
      title: "contentB"
    };
  },
  mounted: function() {
    // console.log("contentB");
  },
  methods: {
    showName: arg => {
      console.log(arg);
    }
  }
};
</script>

