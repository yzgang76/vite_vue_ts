import {defineStore} from 'pinia'

export const userStore = defineStore('userModel', {
    state: () => {
        return {
            num: 0,
            name: "abc"
        }
    },
    getters: {
        reversedName(): string {
            return this.name.split('').reverse().join('')
        }
    },
    actions: {
        growupAction(val: number): void {
            this.num += val
        }
    }
})