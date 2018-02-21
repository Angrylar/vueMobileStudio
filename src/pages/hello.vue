
<style lang="less" scoped>
#hello {
  width: 100%;
  height: 100%;
  background: blue;
  .mint-swipe {
    .mint-swipe-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        color: #ffffff;
        font-weight: bolder;
        text-align: center;
      }
    }
  }
}
</style>

<template>
  <div id="hello">
          <mt-swipe :auto="0" :continuous=false @change="handleChange">
            <mt-swipe-item>page1
                <img src="./../assets/logo.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <p>page2</p>
            </mt-swipe-item>
            <mt-swipe-item>
                <p @click="go('index')">page3</p>
            </mt-swipe-item>
          </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";

export default {
  name: "hello",
  components: { Swipe, SwipeItem },
  data() {
    return {};
  },
  mounted() {
    console.log("hello");
  },
  methods: {
    handleChange(index) {
      console.log(index);
    },
    go(arg){
        console.log(arg);
        this.$router.push({
            path: '/main/'
        })
    }
  }
};
</script>


