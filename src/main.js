import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/css/style.css'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage'
import './assets/js/greensock-js/src/minified/TweenMax.min';
import './assets/js/greensock-js/src/minified/plugins/MorphSVGPlugin.min.js';
import './assets/js/greensock-js/src/minified/plugins/SplitText.min'
import './assets/js/greensock-js/src/minified/jquery.gsap.min';

Vue.config.productionTip = false
Vue.use(VueFullPage);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// 设置 rem 函数
function setRem () {
    //  PC端
    let baseSize = 16;
    let basePc = baseSize / 1920; // 表示1920的设计图,使用100PX的默认值
    let vW = window.innerWidth; // 当前窗口的宽度
    let vH = window.innerHeight; // 当前窗口的高度
    if (vW > 1000) { vW = 1000 };
    // 非正常屏幕下的尺寸换算
    let dueH = vW * 1080 / 1920
    if (vH < dueH) { // 当前屏幕高度小于应有的屏幕高度，就需要根据当前屏幕高度重新计算屏幕宽度
        vW = vH * 1920 / 1080
    }
    let rem = vW * basePc; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应font-size值
    document.documentElement.style.fontSize = rem + "px";
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem()
};