import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	alabanzas: [
  		{
  			titulo: 'Admirable', 
  			artista: 'Christine D Clario', 
  			tipo: 'Adoración'
  		},
  		{
  			titulo: 'Aguas Profundas', 
  			artista: 'David Quinlan', 
  			tipo: 'Júbilo'
  		},
  		{
  			titulo: 'Al Que Está en el Trono', 
  			artista: 'Michael Bunster', 
  			tipo: 'Adoración'
  		},
  	]
  },
  getters: {
  	jubilo: state => {
  		return state.alabanzas.filter(item => item.tipo === 'Júbilo')
  	},
  	adoracion: state => {
  		return state.alabanzas.filter(item => item.tipo === 'Adoración')
  	}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
