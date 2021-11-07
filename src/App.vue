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

    <div id="karty">
      <p>sfafdsadsfd</p>
      <div v-for="elem in $root.karty">
        <div class="karta">

        <p>{{elem.code}}</p>
        <p>{{elem.mana}}</p>

        <p>{{elem.life}}</p>
        <p>{{elem.damage}}</p>



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
     karty:[
      {
        code:'szkielet',
        mana:1,
        life:1,
        damage:1
      }
    ]
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
  border:1px black solid;border-radius:5%;height:200px;width:200px
}

</style>
