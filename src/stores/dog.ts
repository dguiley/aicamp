import { defineStore } from 'pinia'

export const useDogStore = defineStore('dog', {
  
  // a function that returns a fresh state
  state: () => ({
    dogs: [] as string[],
    favorites: [] as string[],
  }),

  // optional getters
  getters: {
    // sample 
    dogount(): number {
      return this.dogs.length
    },
    // sample 
    favoriteCount(): number {
      return this.favorites.length
    }
  },

  // optional actions
  actions: {
    async fetchDogs(): Promise<string[]> {
      if (!this.dogs.length) {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        this.dogs = Object.keys(data.message);
      }
      return this.dogs
    },
  },
})