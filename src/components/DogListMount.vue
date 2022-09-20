
<template>
  <ul>
    <li v-for="dog in dogs">{{dog}}...</li>
  </ul>
</template>


<script setup lang="ts">
import { useDogStore } from '@/stores/dog';
import { onMounted, ref } from 'vue';

let dogs = ref([] as string[])  // making dogs a "ref" alows the component to up date when changed.

onMounted(async () => {
  dogs.value = await useDogStore().fetchDogs()
})
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
