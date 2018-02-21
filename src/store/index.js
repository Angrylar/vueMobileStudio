import Vue from 'vue';
import Vuex from 'vuex';
import moduleA from './module/moduleA.js';
import moduleB from './module/moduleB.js';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        moduleA,
        moduleB,
    }
})