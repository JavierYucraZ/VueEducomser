<template>
  <div class="hello">
    <!-- <h1>{{ $store.state.titulo }}</h1> -->
    <h1>{{ $store.getters.getTitulo }}</h1>
    <h2>{{ $store.getters.nombreCompleto }}</h2>
    <h3>Lista de amigos</h3>
    <input type="text" v-model="amigo">
    <button @click="agregarAmigoComponente">
      <span v-if="this.$store.state.index == null">Agregar Amigo</span>
      <span v-else>Editar Amigo</span>
    </button>
    <ul>
      <li v-for="(amigo, index) in $store.state.amigos" :key="index">
        {{ amigo }}
        <button @click="$store.dispatch('eliminarAmigoA', index)">
          Eliminar
        </button>
        <button @click="editarAmigoComponente(amigo, index)">
          Editar
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      amigo : ''
    }
  },
  methods : {
    agregarAmigoComponente(){
      if(this.$store.state.index == null){
        this.$store.dispatch('agregarAmigoA', this.amigo)
      }else{
        let amigoObj = {
          id : this.$store.state.index,
          am : this.amigo
        }
        this.$store.dispatch('editarAmigoA', amigoObj)
      }
      this.amigo = ''
    },
    editarAmigoComponente(amigo, index){
      this.amigo = amigo
      this.$store.state.index = index
    }
  }
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
