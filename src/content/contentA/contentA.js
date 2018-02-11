import { Loadmore } from 'mint-ui';
import { Spinner } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';

export default {
    name: "contentA",
    data() {
        return {
            title: 'contentA',
            lists: [
                1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 0, 11, 2, 34, 3, 67, 77, 4, 23, 1, 23, 12, 3, 34, 4, 45, 5, 6, 6, 7, 7, 8, 9, 9
            ],
            allLoaded: false
        }
    },
    components: { Loadmore, Spinner, InfiniteScroll },
    mounted() {
        for (let i = 0; i < 100; i++) {
            this.lists.push(i);
        }
    },
    methods: {
        loadTop: function () {
            // 加载更多数据
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom: function () {
            // 加载更多数据
            this.allLoaded = true;// 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded();
        },
        loadMore: function () {
            this.loading = true;
            setTimeout(() => {
                let last = this.lists[this.lists.length - 1];
                for (let i = 1; i <= 10; i++) {
                    this.lists.push(last + i);
                }
                this.loading = false;
            }, 5000);
        }
    },

};