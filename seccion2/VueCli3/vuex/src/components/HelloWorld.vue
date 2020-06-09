<template>
  <div class="hello">
    <!-- <h1>{{ $store.state.titulo }}</h1> -->
    <h1>{{ $store.getters.getTitulo }}</h1>
    <h2>{{ $store.getters.nombreCompleto }}</h2>
    <h3>Lista de amigos</h3>
    <input type="text" v-model="amigo">
    <button @click="agregarAmigoComponente">
      Agregar amigo
    </button>
    <ul>
      <li v-for="(amigo, index) in $store.state.amigos" :key="index">
        {{ amigo }}
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
      this.$store.dispatch('agregarAmigoA', this.amigo)
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
