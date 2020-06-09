import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state : {
    titulo : 'Utilizando Vuex',
    nombre : 'Javier',
    apellido : 'Yucra',
    amigos : []
  },
  mutations : {
    agregarAmigoM(state, amigo){
      state.amigos.push(amigo)
    }
  },
  actions : {
    agregarAmigoA( context, amigo ){
      context.commit('agregarAmigoM', amigo)
    }
  },
  getters : {
    getTitulo( state ) {
      return state.titulo
    },
    nombreCompleto( state ){
      return `Mi nombre es : ${state.nombre}, mi apellido es : ${state.apellido}`
    }
  }
})
