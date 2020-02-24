import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Sign_In from './Sign_In.vue'
//import Client_Home from './Client_Home.vue'
//import Client_Portal_Form from './Client_Portal_Form.vue'
import vuetify from './plugins/vuetify';
import store from './store'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {path: '/', component: Sign_In},
  //{path: '/ClientHome', component: Client_Home},
  //{path: '/ClientPortalForm', component: Client_Portal_Form}
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
