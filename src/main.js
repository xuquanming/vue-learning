import ElementUI from 'element-ui';
/*需要加SASS*/
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(router);
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  /*给谁渲染*/
  render: h => h(App),

})
