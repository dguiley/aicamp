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
        if (fetchDogsPromise == null) {
          fetchDogsPromise = async function () {
            const response = await fetch("https://dog.ceo/api/breeds/list/all")
            const data = await response.json()
            return Object.keys(data.message)
          }()
        }
        this.dogs = await fetchDogsPromise
        fetchDogsPromise = null
      }
      return this.dogs
    },

    async fetchDogs2(): Promise<string[]> {
      if (!this.dogs.length) {
        this.dogs = await this.fd()
      }
      return this.dogs
    },

    async fd(): Promise<string[]> {
      if (!fetchDogsPromise){
        fetchDogsPromise = async function () {
          const response = await fetch("https://dog.ceo/api/breeds/list/all")
          const data = await response.json()
          fetchDogsPromise = null
          return Object.keys(data.message)
        }()
      }
      return fetchDogsPromise

    },
  },
})

let fetchDogsPromise: Promise<string[]> | null = null