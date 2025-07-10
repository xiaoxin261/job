import { defineStore } from 'pinia'

interface InfoState {
  count: number
}

export const useInfo = defineStore('Info', {
  state: (): InfoState => ({
    count: 0
  }),
  getters: {
    double (state): number {
      return state.count * 2
    }
  },
  actions: {
    add () {
      this.count++
    }
  }
})
