import { createStore } from 'vuex'
import axios from 'axios'

const Bnry = "http://localhost:3050/"

export default createStore({
  state: {
    teslas: null
  },
  getters: {
  },
  mutations: {
    setTeslas(state, values) {
      state.teslas = values
    }
  },
  actions: {
    async fetchArticles(context) {
      const res = await axios.get(`${Bnry}`);
      const output = await res.data.articles;
      console.log(res.data.articles)
      if (output){
        context.commit('setTeslas', output)
      } else {
        context.commit('setTeslas', [])
      }
    }
  },
  modules: {
  }
})
