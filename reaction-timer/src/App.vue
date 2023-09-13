<template>
  <div class="homeWrapper">
    <div class="previousScores">
      <PreviousResults :prevScore="formerTimes" />
    </div>
    <div class="reactionTimer">
      <h1>Reaction Timer</h1>
      <button @click="start" :disabled="isPlaying">Play</button>
      <Block v-if="isPlaying" :delay="delay" @end="endGame" />
      <Results v-if="showResults" :reactTime="score"></Results>
    </div>
  </div>
  <!-- <p v-if="">ReactionTime: {{ score }}ms</p> -->
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'
import PreviousResults from './components/PreviousResults.vue'

export default {
  name: 'App',
  components: {
    Block,
    Results,
    PreviousResults
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
      formerTimes: []
    }
  },
  mounted() {
    console.log('OnMounted');
    if (localStorage.getItem('prevTimes')) {
      // console.log(JSON.parse(localStorage.getItem('prevTimes')));
      const tempArrMount = JSON.parse(localStorage.getItem('prevTimes'))
      tempArrMount.forEach(el => {
        this.formerTimes.push(el)
      });
      console.log(tempArrMount);
      // this.formerTimes = tempArrMount
      console.log(this.formerTimes);
    }
    // WHERE WAS I
    // I need to figure out how to pass formerTimes to PreviousResults
    // Right know this.formerTimes is console loggin = Proxy { <target>: (5) […], <handler>: {…} } and idk why
    // Previous results work but they are added instead of replace everytime it rerenders 
    },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResults = false
    },
    endGame(reactionTime) {
      this.score = reactionTime
      if (localStorage.getItem('prevTimes')) {
        let tempArr = JSON.parse(localStorage.getItem('prevTimes'))
        // tempArr.forEach((el) => {
        //   this.formerTimes.push(el)
        // })
        this.formerTime = tempArr
        this.formerTimes.push(this.score)
        localStorage.setItem('prevTimes', JSON.stringify(this.formerTimes))
      } else {
        localStorage.setItem('prevTimes', JSON.stringify([this.score]))
        this.formerTime.push(this.score)
      }
      this.isPlaying = false
      this.showResults = true
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
  color: #b28c18;
  margin-top: 60px;
}

.homeWrapper {
  display: flex;
  flex-direction: row;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.homeWrapper > div {
  width: 50%;
  height: auto;
  border: 2px dotted purple;
}
</style>
