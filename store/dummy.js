import axios from "axios";


export const state = () => ({
  counter: 0,
  user:[],
  bodyTheme: true
})

export const getters = {
  getUserData(state) {
    return state.user
  },
  infoBodyTheme(state){
    return state.bodyTheme
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  changeTheme(state,payload) {
    state.bodyTheme = payload
  }, dataUsers(state,payload){
    state.user = payload
  }
}

export const actions = {
  getDataUser({commit}){
      const config = {
        method: "GET",
        url:'https://632028dfe3bdd81d8ef3b725.mockapi.io/user',
        headers: {
          accept: "application/json",
        },
      }
      axios(config)
      .then((response) => {
        commit("dataUsers", response.data)
        console.log(response.data)
        // console.log($config)
      })
      .catch((err) => {
        console.error(err)
      })
  },
}
