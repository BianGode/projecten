<template>
  <div v-if="job">
  <h1>{{ job.title }}</h1>
  <p>The job is {{ id }}</p>
  <p>{{job.details}}</p>
  </div>
  <div v-else>
    <h1>Still loading....</h1>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
    .then((res) => res.json())
    .then((data) => this.job = data)
    .catch(err => console.log(err.message))
  }
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // }
}
</script>
<style>
  
</style>