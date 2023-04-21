import { createStore } from 'vuex'
import axios from 'axios'

const Bnry = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-20&sortBy=publishedAt&apiKey=84616c66f1224da88c20f8860d3d296c"

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
      if (res.data !== undefined){
        context.commit('setTeslas', res.data.articles)
      } else {
        context.commit('setTeslas', [])
      }
    }
  },
  modules: {
  }
})
