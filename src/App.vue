<template>
  <div id="app">

    <div id="gracz1" style="display:flex;align-items:center; justify-content:center;">
      <div style="width:100px;height:100px;position:relative">
        <div style="border:1px black solid;border-radius:100%;width:100px;height:100px"></div>
        <div style="position:absolute;margin-left:30px;background:#ff1111; bottom:-10px;border:1px black solid;border-radius:100%;width:40px;height:40px">
           <span style="color:white;font-weight:bold;line-height:4  0px">  30</span> 

        </div>

      </div>

    </div>

    <div id="karty1" style="display:flex">
      <div v-for="(elem,index) in $root.karty2" >
        <div class="karta" :class="{'selected':elem.selected}" @click="attack(elem , index)">

        <p>{{elem.code}}</p>
        <p>Mana: {{elem.mana}}</p>

        <p>Życie: {{elem.life}}</p>
        <p>Obrażenia: {{elem.damage}}</p>



        </div>
      </div>
      

    </div>



    <div id="karty2" style="display:flex">
      <div v-for="(elem,index) in $root.karty" >
        <div class="karta" :class="{'selected':elem.selected}"  @click="selectCard(elem,index)">

        <p>{{elem.code}}</p>
        <p>Mana: {{elem.mana}}</p>

        <p>Życie: {{elem.life}}</p>
        <p>Obrażenia: {{elem.damage}}</p>



        </div>
      </div>
      

    </div>



    <Board />

    <p><b>Tutaj będzie moja wersja magic the gathering</b></p>


    <p>to do:</p>
    <ul>
      <li>-gracz posiada manę i karty</li>
      <li>Można bić inną kartę albo gracza</li>

    </ul>
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    Board
  },
  data(){
    return {
     selectedCard:{},
     selectedCardindex:0,
     selected:false,

  
    }
  },
  methods:{
    selectCard(elem,index){
      console.log('afsdsdfsds');
      if (this.selected == false){
        this.selected = true;
        elem.selected = true;
        this.selectedCard = elem;
        this.selectedCardindex= index;
      }
    },
    attack(elem,index){
      if(this.selected){

      elem.life -= this.selectedCard.damage;
      this.selectedCard.used = true;
      this.selected = false;
      this.selectedCard.life -= elem.damage;
      this.selectedCard.selected = false;
      }

    console.log(index);
      if(elem.life <= 0){
        this.$root.karty2.splice(index,1);
      }

       if(this.selectedCard.life <= 0){
        this.$root.karty.splice(this.selectedCardindex,1);
      }

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.karta{
  border:1px black solid;border-radius:5%;height:200px;width:200px;margin:2px
}

.selected{
   background-color: coral;
}

</style>
