import axios from "axios";


export const state = () => ({
  counter: 0,
  user:[],
  bodyTheme: true
})

export const getters = {
  getCounter(state) {
    return state.counter
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
        console.log(response.data)
        // console.log($config)
      })
      .catch((err) => {
        console.error(err)
      })
  },
}
