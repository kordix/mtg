import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data:{
    karty:[
      {
        code:'Kościotrup',
        mana:1,
        life:2,
        damage:1,
        selected:false,
        used:false,

      },
      {
        code:'Pipa',
        mana:1,
        life:1,
        damage:1,
        selected:false,
        used:false,


      }
    ],
    karty2:[
      {
        code:'Ciota',
        mana:1,
        life:1,
        damage:1,
        selected:false

      },
      {
        code:'Kujon',
        mana:1,
        life:1,
        damage:1,
        selected:false

      }
    ]


  }
}).$mount('#app')
