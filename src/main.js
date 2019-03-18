import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// globalni mixin necemo koristiti

Vue.mixin({
  created(){
    console.log(' created from global mixin');
  },
  mounted(){
    console.log('mounted from global mixin');
  }

})

new Vue({
  render: h => h(App),
}).$mount('#app')
