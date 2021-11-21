import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    mana:1,
    players: [
      {
        id: 0,
        imie: 'Zbigniew',
        life: 30,
        mana:0,
        karty:[
       
        ]
      },
      {
        id: 1,
        imie: 'Ignacy',
        life: 30,
        mana:1,
        karty:[]
      }
    ],
    kartystol: [
   
    ],
    kartystol2: [
      {
        code: 'Ciota',
        mana: 1,
        life: 1,
        damage: 1,
        selected: false

      },
      {
        code: 'Kujon',
        mana: 1,
        life: 1,
        damage: 1,
        selected: false
      },
      {
        code: 'Czaja',
        mana: 2,
        life: 2,
        damage: 2,
        selected: false,
        used: false,
      },
      {
        code: 'lewak',
        mana: 3,
        life: 3,
        damage: 2,
        selected: false,
        used: false,
      },
      
    ],
    kartytalia1: [
      {
        code: 'Faja',
        mana: 1,
        life: 1,
        damage: 1,
        selected: false,
        used: false,

      },
      {
        code: 'Czaja',
        mana: 2,
        life: 2,
        damage: 2,
        selected: false,
        used: false,

      },
      {
        code: 'Prawak',
        mana: 3,
        life: 3,
        damage: 2,
        selected: false,
        used: false,
      },
      {
        code: 'Kościotrup',
        mana: 1,
        life: 2,
        damage: 1,
        selected: false,
        used: false,

      },
      {
        code: 'Pipa',
        mana: 1,
        life: 1,
        damage: 1,
        selected: false,
        used: false,
      },

    ],
    kartytalia2: [

    ]


  }
}).$mount('#app')
