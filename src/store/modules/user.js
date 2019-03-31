const state = {
    isLogin:false
}

const getters = {

}

const mutations = {
    login(state){
        state.isLogin = true
    },
    logout(state){
        state.isLogin = false
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations
}