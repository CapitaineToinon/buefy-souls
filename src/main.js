import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollTo from "vue-scrollto";
import VueRx from "vue-rx";
import {
  Button,
  Field,
  Radio,
  Icon,
  Loading,
  Menu,
  Tooltip,
  Message
} from "buefy";
import ssLoading from "./components/ssLoading.vue";

Vue.use(VueRx);
Vue.use(VueScrollTo);

// Buefy components
Vue.use(Button);
Vue.use(Field);
Vue.use(Radio);
Vue.use(Icon);
Vue.use(Loading);
Vue.use(Menu);
Vue.use(Tooltip);
Vue.use(Message);

// Our global components
Vue.component("ss-loading", ssLoading);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
