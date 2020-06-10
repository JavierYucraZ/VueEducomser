import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state : {
    titulo : 'Utilizando Vuex',
    nombre : 'Javier',
    apellido : 'Yucra',
    amigos : ['Karla', 'Rodrigo'],
    index : null
  },
  mutations : {
    agregarAmigoM(state, amigo){
      state.amigos.push(amigo)
    },
    eliminarAmigoM(state, index){
      state.amigos.splice(index, 1)
    },
    editarAmigoM(state, objeto){
      state.index = objeto.id
      state.amigos[state.index] = objeto.am
      alert('Edicion completa')
      state.index = null
    }
  },
  actions : {
    agregarAmigoA( context, amigo ){
      context.commit('agregarAmigoM', amigo)
    },
    eliminarAmigoA( context, index ){
      if(confirm('Estas seguro de querer eliminar este registro?')){
        context.commit('eliminarAmigoM', index)
      }
    },
    editarAmigoA( context, objeto ){
      context.commit('editarAmigoM', objeto)
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
