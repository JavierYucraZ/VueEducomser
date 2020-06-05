<template>
  <div id="app">
    <!-- <h2>
      {{titulo}}
    </h2>
    <div class="form">
      <div class="form-group">
        <label for="">Titulo</label>
        <input type="text" class="form-control" placeholder="Ingrese el titulo"
        v-model="nota.titulo">
      </div>
      <div class="form-group">
        <label for="">Mensaje</label>
        <textarea v-model="nota.texto" class="form-control" placeholder="Ingrese su mensaje aca"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-success" @click="agregarNota">
          Guardar nota
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4" v-for="(nota, index) in notas" v-bind:key="index">
        <div class="card mt-3 mb-3 border border-info">
          <div class="card-header">
            <h1 class="card-title d-inline">
              {{nota.titulo}}
            </h1>
            <button class="btn close" @click="eliminarNota(index)">
              <span>&times;</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text lead">
              {{ nota.texto }}
            </p>
          </div>
          <div class="card-footer">
            <p class="lead text-muted">
              {{ nota.fecha }}
            </p>
          </div>
        </div>
      </div>
    </div> -->
    <ejemploComponente></ejemploComponente>
  </div>
</template>


<script>
import ejemploComponente from './components/Componente'
export default {
  name: 'app',
  components : {
    ejemploComponente
  }
  // data () {
  //   return {
  //     titulo : 'Lista de quehacer',
  //     nota : {
  //       titulo : '',
  //       texto : '',
  //       fecha : ''
  //     },
  //     notas : []
  //   }
  // },
  // methods : {
  //   agregarNota : function(){
  //     let {texto, titulo} = this.nota
  //     this.notas.push({
  //       titulo,
  //       texto,
  //       fecha : new Date(Date.now()).toLocaleString()
  //     })
  //   },
  //   eliminarNota : function(index){
  //     this.notas.splice(index, 1)
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
