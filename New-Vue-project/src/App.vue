<script>
  export default{
    setup
  };
</script>

<template>
  <h1>{{name}}</h1>
  <p v-if="status === 'active'"> User is active</p>
  <p v-else-if="status === 'pending'"> User is pending</p>
  <p v-else> User is not active</p>

  <h3>Task:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{task}}</li>
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