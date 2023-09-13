<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    Click me
  </div>
</template>

<script>
export default {
  props: ['delay'],
  data(){
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0
    }
  },
  mounted() {
    console.log('component Mounted');
    setTimeout(()=> {
      this.showBlock = true
      this.startTimer()
    }, this.delay)
    
  },
  methods: {
    startTimer(){
      this.timer = setInterval(() => {
        this.reactionTime += 10
      }, 10)
    },
    stopTimer(){
      clearInterval(this.timer)
      this.$emit('end', this.reactionTime)
      // this.formerTimes.push({'time': this.reactionTime})
      // localStorage.setItem('prevTimes', this.formerTimes)
    }
  }
}
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background-color: rgba(159, 96, 217, 0.722);
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>