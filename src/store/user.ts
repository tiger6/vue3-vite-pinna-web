import { defineStore } from 'pinia'

const useStore = defineStore({
  id: 'user',
  state: () => {
    return {
      userName: ''
    }
  },
  getters: {
    getName: state => state.userName
  },
  actions: {
    setUser (name: string) {
      this.userName = name
    }
  }
})

export default useStore
