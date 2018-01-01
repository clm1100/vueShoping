import localStore from 'store'
let token = localStore.get('Token')
console.log(token);
let UserInfo = localStore.get('UserInfo')
const state = {
  login: token,
  user: UserInfo
}
const mutations = {
  loginxiugai(state, obj) {
      console.log("555555555555555555")
    state.login = obj
  }
}
const actions = {
  loginxiugai(context, obj) {
    localStore.set('Token',obj.token);
    localStore.set('UserInfo',obj.user)
    context.commit('loginxiugai', obj)
  }
}
const getters = {

}

export default {
  state,
  mutations,
  actions,
}
