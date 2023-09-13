<script setup>
import { ref } from 'vue'; 
import Header from './components/Header.vue'
import { vAutoAnimate } from '@formkit/auto-animate'

const todos = ref([])
const newTodo = ref('')

function addToArray() {
  todos.value.push({ value: newTodo.value})
  newTodo.value = '';
}

function rmvFromArray(removeThis) {
  todos.value = todos.value.filter((t) => t !== removeThis)
  console.log(todos.value);
}

</script>

<template>
  <Header></Header>
  <div class="flex-parent" v-auto-animate>
    <h2>Add new Todo</h2>
    <div>
      <form @submit.prevent="addToArray">
        <input v-model="newTodo" type="text"/>
      </form>
    </div>
    <ul v-for="todo in todos">
      <li>{{ todo.value }}</li><button @click="rmvFromArray(todo)">x</button>
    </ul>
  </div>
</template>

<style scoped>
* {
  text-align: center;
}
.flex-parent {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
