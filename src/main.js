import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './components'
import './styles/index.scss'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    request(url, data) {
      return new Promise((res, rej) => {
        let timer = setTimeout(() => {
          rej('Request timeout')
        }, 10000)

        window.ipc.on(url, (response) => {
          if (response.status === "success") res(response.data);
          else rej(response.error);

          clearTimeout(timer)
        });

        window.ipc.send(url, data);
      });
    },
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
