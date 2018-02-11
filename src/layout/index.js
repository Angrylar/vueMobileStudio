import { Header } from "mint-ui";
import { Tabbar, TabItem } from 'mint-ui';
import { Popup } from 'mint-ui';
import { Button } from 'mint-ui';

export default {
    name: "layout",
    components: { Header, Tabbar, TabItem, Popup, Button },
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            selected: '',
            transitionName: '',
            popupVisible: false
        };
    },
    created() {
        this.selected = this.$router.app.$route.name
    },
    mounted() {
        console.log(this.$router)
    },
    watch: {
        '$router'(to, from) {
            alart(123)
            console.log(`${to}&${from}`)
            // const toDepth = to.path.split('/').length
            // const fromDepth = from.path.split('/').length
            // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            this.transitionName = 'slide'
        },
        selected: function (val) {
            this.$router.push({ path: `/main/${val}` })
            // console.log(`${val}`)
        }
    },
    methods: {
        handleClose: function () {
            console.log("handleClose");
            this.popupVisible = true;
        },
        componentA: function () {
            console.log("a")
        },
        routerChange: function (val) {
        },
        hidePopup: function () {
            this.popupVisible = false;
        }
    }
};