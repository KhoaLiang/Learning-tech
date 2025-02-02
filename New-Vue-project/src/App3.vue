<script setup>
  import { ref, onMounted } from 'vue';
  
  const name = ref('John DEER');
  //ref is similar to useState in React
  const status = ref('active');
  const tasks = ref(['task1','task2','task3']);
  const link = 'https://www.google.com';
  const newTask = ref('');
  const toggleStatus = () => {
    if (status.value=== 'active') {
      status.value= 'pending';
    } else if(status.value=== 'pending'){
      status.value= 'inactive';
    } else {
      status.value= 'active';
    }
  }
  const addTask = () => {
    if(newTask.value.trim() !== ''){
      tasks.value.push(newTask.value);
      newTask.value = '';
    } 
  }
  const deleteTask = (index) => {
    tasks.value.splice(index, 1);
  }
  onMounted(async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json();
      tasks.value = data.map((task) => task.title);
    } catch (error) {
      console.log('error fetching data');
    }
  });
</script>

<template>
  <h1>{{name}}</h1>
  <p v-if="status === 'active'"> User is active</p>
  <p v-else-if="status === 'pending'"> User is pending</p>
  <p v-else> User is not active</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <br>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <!-- the input is now bound to the const newTask -->
    <button type="submit">Submit</button>
  </form>

  <h3>Task:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{task}}
      </span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>
  <a :href="link">Click for google</a>
  <br>
  <!-- <button v-on:click="toggleStatus">Change status</button> -->
   <button @click="toggleStatus">Change status</button>
</template>


<!-- <style scoped>
  h1 {
    color: red;
  }
</style> -->