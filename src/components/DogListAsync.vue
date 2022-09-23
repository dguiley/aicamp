
<template>
  <ul>
    <li v-for="dog in dogs">
      {{dog}}
    </li>
  </ul>
</template>


<script setup lang="ts">
import { useDogStore } from '@/stores/dog';

let ds = useDogStore()
let dogs = await ds.fetchDogs()       // using async in setup script makes this an async component, so it renders after setup
</script>
  

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  border-bottom: 1px solid white;
}
</style>
