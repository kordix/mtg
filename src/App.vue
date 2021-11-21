<template>
  <div id="app">

    <div style="position:absolute;left:20px;bottom:20px">
    <button @click="endturn" style="margin-right:5px;" v-if="pickedCard">Koniec tury</button>
    <span id="messages" style="" @click="message = ''">{{message}}</span>

    </div>

    <div id="gracz1" style="display:flex;align-items:center; justify-content:center;" :class="{'pointer':selected}" @click="attackPlayer">
      <div style="width:100px;height:100px;position:relative">
        <div style="border:1px black solid;border-radius:100%;width:100px;height:100px"></div>
        <div style="position:absolute;margin-left:30px;background:#ff1111; bottom:-10px;border:1px black solid;border-radius:100%;width:40px;height:40px">
           <span style="color:white;font-weight:bold;line-height:40px">  {{$root.players[0].life }} </span> 

        </div>

            <div style="position:absolute;margin-left:30px;background:blue; left:50px; bottom:30px;border:1px black solid;border-radius:100%;width:40px;height:40px">
          <span style="color:white;font-weight:bold;line-height:40px">  {{$root.players[0].mana }} </span> 

      </div>


      </div>

    </div>

    <div id="kartystol1" style="display:flex;height:210px">
      <div v-for="(elem,index) in $root.kartystol2" >
        <div class="karta" :class="{'used':elem.used ,'selected':elem.selected, 'pointer':selected}" @click="attack(elem , index)">

        <p>{{elem.code}}</p>
        <p>Mana: {{elem.mana}}</p>

        <p>Życie: {{elem.life}}</p>
        <p>Obrażenia: {{elem.damage}}</p>



        </div>
      </div>
      

    </div>



    <div id="kartystol2" style="display:flex;height:210px" @click="layCard()" :class="{'pointer':selectedhand}">
      <div v-for="(elem,index) in $root.kartystol" >
        <div class="karta" :class="{'selected':elem.selected, 'used':elem.used, 'pointer':!selected}"  @click="selectCard(elem,index)">

        <p>{{elem.code}}</p>
        <p>Mana: {{elem.mana}}</p>

        <p>Życie: {{elem.life}}</p>
        <p>Obrażenia: {{elem.damage}}</p>



        </div>
      </div>
      

    </div>



 <div id="cardsHand1" style="margin-left:300px;display:flex;height:210px" >
      <div v-for="(elem,index) in $root.players[0].karty" >
        <div class="karta" :class="{'selected':elem.selected,pointer:!selectedhand }"  @click="selectCardHand(elem,index)">

        <p>{{elem.code}}</p>
        <p>Mana: {{elem.mana}}</p>

        <p>Życie: {{elem.life}}</p>
        <p>Obrażenia: {{elem.damage}}</p>



        </div>
      </div>
      

  </div>
<div id="talia" style="position:absolute;right:20px;bottom:10px">
<button @click="pickCard" v-if="!pickedCard">Dobierz kartę</button>
    <div class="karta"  @click="selectCardHand(elem,index)">
       <svg height="200" width="500">
  <polyline points="0,0 200,200" style="fill:none;stroke:black;stroke-width:1" />
  <polyline points="0,200 200,0" style="fill:none;stroke:black;stroke-width:1" />

</svg>
        <!-- <p>Mana: {{elem.mana}}</p> -->

        <!-- <p>Życie: {{elem.life}}</p> -->
        <!-- <p>Obrażenia: {{elem.damage}}</p> -->



        </div>
  </div>

  <div id="gracz2" style="display:flex;align-items:center; justify-content:center;" :class="{'pointer':selected}" @click="attackPlayer">
    <div style="width:100px;height:100px;position:relative">
      <div style="border:1px black solid;border-radius:100%;width:100px;height:100px"></div>
      <div style="position:absolute;margin-left:30px;background:#ff1111; bottom:-10px;border:1px black solid;border-radius:100%;width:40px;height:40px">
          <span style="color:white;font-weight:bold;line-height:40px">  {{$root.players[1].life }} </span> 

      </div>

      <div style="position:absolute;margin-left:30px;background:blue; left:50px; bottom:30px;border:1px black solid;border-radius:100%;width:40px;height:40px">
          <span style="color:white;font-weight:bold;line-height:40px">  {{$root.players[1].mana }} </span> 

      </div>


    </div>

  </div>
  



  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data(){
    return {
      message:'',
     cardHand:{},
     cardHandIndex:-1,
     selectedCard:{},
     selectedCardindex:0,
     selected:false,
     selectedhand:false,
     pickedCard:false


  
    }
  },
  methods:{
    endturn(){
      this.pickedCard = false;
      this.$root.mana += 1;
      this.$root.players[0].mana = this.$root.mana;
      this.$root.players[1].mana = this.$root.mana;

      this.$root.kartystol.map(function(el){
        el.used = false;
      })



    },
    pickCard(){
      if(this.pickedCard == false){
        this.$root.players[0].karty.push(this.$root.kartytalia1[0]);
        this.$root.kartytalia1.shift();
        this.pickedCard = true;
      }

    },


    layCard(){
      if(this.cardHand.mana > this.$root.players[1].mana){
        this.message = 'NIE MASZ WYSTARCZAJĄCO MANY!!!';
        return;
      }


      if(this.selectedhand == true){

      this.$root.players[1].mana -= this.cardHand.mana;
      this.cardHand.selected = false;
      this.$root.kartystol.push(this.cardHand);
      this.$root.players[0].karty.splice(this.cardHandIndex,1);

      this.selectedhand = false;
      this.cardHand = {};
      this.cardHandIndex = -1;

      }
    },
    selectCardHand(elem,index){
      if(elem.selected == true){
        this.cardHand = {};
        this.selectedhand = false;
        elem.selected = false;
        // console.log( this.$root.players[0].karty[] );
        this.$root.players[0].karty[index].selected = false;
      }else if (this.selectedhand == false){
        this.selectedhand = true;
        elem.selected = true;
        this.cardHand = elem;
        this.cardHandIndex= index;

      }


    },
    selectCard(elem,index){
      console.log(this.selected);
      console.log(elem.used);
      if (this.selected == false && elem.used == false){
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
        this.$root.kartystol2.splice(index,1);
      }

       if(this.selectedCard.life <= 0){
        this.$root.kartystol.splice(this.selectedCardindex,1);
      }

    },
    attackPlayer(elem,index){
      if(this.selected){

        this.$root.players[0].life -= this.selectedCard.damage;
        this.selectedCard.used = true;
        this.selected = false;
        this.selectedCard.selected = false;

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

.used {
   background-color: antiquewhite;

}

.pointer{
  cursor:pointer
}

</style>
