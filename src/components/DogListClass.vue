
<template>
  <ul>
    <li v-for="dog in dogs">{{dog}}...</li>
  </ul>
</template>


<script  lang="ts">
import { useDogStore } from '@/stores/dog'
import {Options, Vue} from 'vue-class-component'

export default class DogListClass extends Vue {
  dogs = [] as string[]

  async mounted() {
    this.dogs= await useDogStore().fetchDogs()
  }
}
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
