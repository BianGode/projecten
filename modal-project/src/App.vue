<template>
  <br>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up</a>
        <a href="#"> more info </a>
      </template>
      <h1>STUDY and you shall learn</h1>
      <p>Put in the time</p>
    </Modal>
  </teleport>
  <button @click.ctrl="toggleModal">Toggle Modal ctrl</button>

  <teleport to=".modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1> {{ title }}</h1>
      <h2>{{ content }}</h2>
    </Modal>
  </teleport>
  <button @click.ctrl="toggleModalTwo">Toggle Modal 2 ctrl</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'If you put in the hours',
      content: 'You WILL get better',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  background-color: blueviolet;
}
</style>
