import Vue from 'vue'
import Vuex from 'vuex'
import Login from './components/Login.vue'
import Personal from "./components/Personal.vue"
Vue.use(Vuex)




//求和相关的配置
const qiuhe = {
    namespaced:true,
    actions: {
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit("Jia", value)
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('Jia', value)
            }, 300)
        }
    },
    mutations: {
        Jia(state, value) {
            state.sum += value
        },
        Jian(state, value) {
            state.sum -= value
        }
    },
    state: {
        sum: 0,
        school: "大学",
        subject: "数学"
    },
    getters: {
        biggsum(state) {
            return state.sum * 10
        }
    }
}



//人员相关配置
const renyuan = {
    namespaced:true,
    actions: {},
    mutations: {
        Add_Person(state, value) {
            state.personalList.unshift(value)
        }
    },
    state: {
        personalList: [{
            id: '001',
            name: '王杰'
        }]
    },
    getters: {


    }




    // const state={
    //     number1:33,
    //     sum:0,
    //     school:"大学",
    //     subject:"数学",
    //     personalList:[{
    //         id:'001',
    //         name:'王杰'

    //     }]
    // }

    //计算属性
    // const getters={
    // biggsum(state){
    //     return state.sum*10
    // }
    // }

    // const actions={
    //    jia(context,value){
    //     context.commit("Jia",value)
    //    },
    //    jian(context,value){
    //     context.commit("Jian",value)
    //    },
    //    jiaOdd(context,value){
    //     if(context.state.sum%2){
    //         context.commit("Jia",value)
    //     }
    //    },
    //    jiaWait(context,value){
    //     setTimeout(()=>{
    //     context.commit('Jia',value)
    //     },300)
    //    },

    // }
    // const mutations={
    // //   
    // Jia(state,value){
    // state.sum+=value
    // },
    // Jian(state,value){
    //     state.sum-=value
    // },
    // Add_Person(state,value){
    //     state.personalList.unshift(value)
    //    }
}

export default new Vuex.Store({
    // state,
    // mutations,
    // actions,
    // getters
    modules: {
       qiuhe,
       renyuan
    }
})