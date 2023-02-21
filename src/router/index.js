import Vue from 'vue';
import VueRouter from 'vue-router';
import { Icon } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import shouye from '../views/ShouYe.vue'
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(VueRouter);
Vue.use(Icon)
const routes = [
  {
    path: 'shouye',
    name: 'shouye',
    component: shouye
  }
];

const router = new VueRouter({
  routes,
});

export default router;
