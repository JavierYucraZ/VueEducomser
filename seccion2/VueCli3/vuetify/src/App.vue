<template>
  <v-app>
    <v-bottom-navigation>

      <router-link to="/" style="text-decoration : none;" class="title">
        <v-btn>
          <span>Inicio</span>
          <v-icon>mdi-home-variant</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/about" style="text-decoration : none;" class="title">
        <v-btn>
          <span>About</span>
          <v-icon>mdi-information</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/services" style="text-decoration : none;" class="title">
        <v-btn>
          <span>Servicios</span>
          <v-icon>mdi-face-agent</v-icon>
        </v-btn>
      </router-link>

    </v-bottom-navigation>

    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data: () => ({
    //
  }),
};
</script>
