<style lang="less">
@import url("./index.less");
</style>

<template>
  <div id="layout">
      <mt-popup
        v-model="popupVisible"
        position="top">
        <div>
            <mt-button @click="hidePopup()" type="primary">primary</mt-button>
        </div>
    </mt-popup>
    <div class="header">
        <mt-header fixed title="标题过长会隐藏后面的内容啊哈哈哈哈">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right" @click="handleClose"></mt-button>
        </mt-header>
    </div>
    <div class="content">
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
    </div>
    <div class="footer">
        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="contentA">
                <img slot="icon" src="../assets/logo.png">
                外卖
            </mt-tab-item>
            <mt-tab-item id="contentB">
                <img slot="icon" src="../assets/logo.png">
                订单
            </mt-tab-item>
            <mt-tab-item id="contentC">
                <img slot="icon" src="../assets/logo.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="contentD">
                <img slot="icon" src="../assets/logo.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
  </div>
</template>
<script src="./index.js"></script>
