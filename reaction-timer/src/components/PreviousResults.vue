 <template>
  <div class="prevWrap">
    <h2>Previous scores</h2>
    <div class="prevScoreWrap" v-if="prevScore" >
      <p v-for="score in prevScore">{{ score }}ms</p>
    </div>
    <button @click="localStorage.clear()">Clear</button>
  </div>
</template>
<script>
export default {
  props: ['prevScore'],
  data() {
    return {

    }
  },
  mounted() {
  }
}
</script>
<style>
.prevWrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.prevScoreWrap {
  width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto;
}
/* 1st 2nd 3rd place size enlargement*/
.prevScoreWrap > :first-child {
  font-size: 30px !important;
}
.prevScoreWrap > :nth-child(2){
  font-size: 25px !important;
}
.prevScoreWrap > :nth-child(3){
  font-size: 20px !important;
}
/*Button Style*/
button {
  margin: 0 auto;
  background-color: transparent;
  border: 5px solid #c6f68d;
  padding: 10px 40px;
  font-weight: bold;
  font-size: 20px;
  font-family: monospace;
  transition: 0.1s ease-in-out;
}
button:hover {
  background-color: #c6f68d;
  border-color: #008b00;
  transition: 0.1s ease-in-out;
}
</style>