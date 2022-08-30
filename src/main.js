import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store' //Vuex 저장소 추가 

createApp(App).use(router).mixin(mixins).use(store).mount('#app')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

window.Kakao.init("b45feedd7b7414bc08f5b5353b762ff8");
