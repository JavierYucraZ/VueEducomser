import Vue from 'vue'
import App from './App.vue'


// Vue.component('saludo',{
//   data () {
//     return {
//       titulo : 'Introduccion a componentes'
//     }
//   },
//   methods : {
//     mensaje : function(){
//       alert('Alerta desde el componente saludo')
//     }
//   }
// })

// let listaframeworks = Vue.extend({
//   template : '<div><ul><li>Vue</li><li>React</li><li>Angular</li></ul></div>'
// })

// Vue.component('lista', listaframeworks)




new Vue({
  el: '#app',
  // render: h => h(App)
  components : {App},
  template : '<App/>'
})
