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
    },
    persist: {  //持久化配置
        enabled: true,  //默认使用会话存储（不定义strategies)，刷新会保留，打开页新面会重置, id 为defineStore的第一个参数
        strategies:[
            {
                key: "user_num",
                storage:localStorage, //localStorage数据存在本地文件中， 打开页新面会保留之前状态
                paths:['num'] //指定存储的属性，默认存储所有属性
            },
            {
                key: "user_name",
                storage: sessionStorage,
                paths:['name']
            }
        ]
    }
})