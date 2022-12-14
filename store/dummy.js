import axios from "axios";


export const state = () => ({
  counter: 0,
  user:[],
  ekspedisi:[],
  frontBanner:[],
  bodyTheme: true
})

export const getters = {
  getUserData(state) {
    return state.user
  },
  getDataEkspedisi(state){
    return state.ekspedisi
  },
  infoBodyTheme(state){
    return state.bodyTheme
  },
  getDataBanner(state){
    return state.frontBanner
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
  }, dataEkspedisi(state,payload){
    state.ekspedisi = payload
  }, dataFrontBanner(state,payload){
    state.frontBanner = payload
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
  getDataEkspedisi({commit}){
    const config = {
      method: "GET",
      url:'https://632028dfe3bdd81d8ef3b725.mockapi.io/ekspedisi',
      headers: {
        accept: "application/json",
      },
    }
    axios(config)
    .then((response) => {
      commit("dataEkspedisi", response.data)
      console.log(response.data)
      // console.log($config)
    })
    .catch((err) => {
      console.error(err)
    })
},getDataBanner({commit}){
  const config = {
    method: "GET",
    url:'https://632028dfe3bdd81d8ef3b725.mockapi.io/front-banner',
    headers: {
      accept: "application/json",
    },
  }
  axios(config)
  .then((response) => {
    commit("dataFrontBanner", response.data)
    console.log(response.data)
    // console.log($config)
  })
  .catch((err) => {
    console.error(err)
  })
},
}
