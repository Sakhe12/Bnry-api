import { createStore } from 'vuex'
import axios from 'axios'

const Bnry = "https://bnry-project.onrender.com"

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
    },
    async searchArticles(context, value) {
      const res = await axios.get(`${Bnry}/searching/${value}`);
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
