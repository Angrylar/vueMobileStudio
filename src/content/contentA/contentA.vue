<style lang="less">
@import url(./contentA.less);
</style>

<template>
    <div id="contentA">
		<h1>{{ title }}</h1>
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
			<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
				<li class="margin-10" v-for="item in lists">{{ item }}</li>
			</ul>
			<div>
				<mt-spinner type="fading-circle"></mt-spinner>
			</div>
		</mt-loadmore>
	</div>
</template>

<script src="./contentA.js"></script>

