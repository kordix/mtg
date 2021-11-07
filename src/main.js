import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data:{
    karty:[
      {
        code:'dupa',
        mana:1,
        life:1,
        damage:1
      }
    ]


  }
}).$mount('#app')
