<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="5">
        <v-text-field
        placeholder="Ingrese el nombre de la pelicula"
        v-model="nPelicula">
        </v-text-field>
      </v-col>
      <v-btn
      color="success"
      class="mr-4"
      @click="buscar">
        Buscar
      </v-btn>
    </v-row>
    <v-row justify="center">
      <v-alert 
      border="top"
      color="warning ligthen-2"
      dark type="success" v-if="peliculas.length === 0">
        Realice una busqueda
      </v-alert>
      <v-col cols="4" v-else v-for="(pelicula, index) in peliculas" :key="index">
        <v-card>
          <v-img class="white--text align-end" :src="pelicula.Poster" aspect-ratio="1">
            <v-card-title>
              {{ pelicula.Title }}
            </v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">
            Tipo : {{ pelicula.Type }}
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <div>A&ntilde;o : {{ pelicula.Year }} </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
            color="green"
            text>
              Descargar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import axios from 'axios'
export default {
  data () {
    return {
      peliculas : [],
      nPelicula : ''
    }
  },
  methods : {
    getPeliculas(){
      axios.get(`http://www.omdbapi.com/?s=${this.nPelicula}&apikey=aef82165`).then(
        resp => {
          console.log(resp.data.Search)
          this.peliculas = resp.data.Search
        }
      ).catch(
        e => console.log(e)
      )
    },
    buscar(){
      this.getPeliculas()
      this.nPelicula = ''
    }
  }
}
</script>