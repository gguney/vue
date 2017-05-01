import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    stateVariable: "this is a state variable from Vuex",
    stateVariableTwo: "this is a state variable from Vuex",

}

const mutations = {
    changeVariable(state){
        state.stateVariable = "state variable changed."
    },
    changeVariableWithParam(state, param){
        state.stateVariableTwo = param
    }
}

const actions = {
    changeVariable ({commit}){
        commit('changeVariable')
    },
    changeVariableWithParam ({commit}, param){
        commit('changeVariableWithParam', param)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})


