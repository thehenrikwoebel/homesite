<template>
  <head>
    <title>HomeSite</title>
  </head>
  <v-app>
    <h1>Lampe Henrik</h1>
    <v-btn v-if="!lightHenrik" @click="lightOn(); lightHenrik = !lightHenrik" color="green" variant="outlined" id="on">An</v-btn>
    <v-btn v-else @click="lightOff(); lightHenrik = !lightHenrik" color="red" variant="outlined">Aus</v-btn>
    <h1>Lampe Treppe</h1>
    <v-btn v-if="!lightTreppe" @click="lightOnTreppe(); lightTreppe = !lightTreppe" color="green" variant="outlined" id="on">An</v-btn>
    <v-btn v-else @click="lightOffTreppe(); lightTreppe = !lightTreppe" color="red" variant="outlined">Aus</v-btn>
    <h1>Lampe Wohnzimmer</h1>
    <v-btn v-if="!lightWohnzimmer" @click="lightOnWohnzimmer(); lightWohnzimmer = !lightWohnzimmer" color="green" variant="outlined" id="on">An</v-btn>
    <v-btn v-else @click="lightOffWohnzimmer(); lightWohnzimmer = !lightWohnzimmer" color="red" variant="outlined">Aus</v-btn>
  </v-app>
</template>

<script>
import connections from '@/connector';
  export default {
    name: 'index-component',
    components: {

    },
    methods: {
      lightOn: () => {
        connections.turnLightOnHenrik();
      },
      lightOff: () => {
        connections.turnLightOffHenrik();
      },
      lightOnTreppe: () => {
        connections.turnLightOnTreppe();
      },
      lightOffTreppe: () => {
        connections.turnLightOffTreppe();
      },
      lightOnWohnzimmer: () => {
        connections.turnLightOnWohnzimmer();
      },
      lightOffWohnzimmer: () => {
        connections.turnLightOffWohnzimmer();
      }
    },
    data() {
      return {
        lightHenrik: Boolean,
        lightTreppe: Boolean,
        lightWohnzimmer: Boolean
      }
    },
    onMounted() {
      this.lightHenrik = connections.lightInfoHenrik()
      this.lightTreppe = connections.lightInfoTreppe()
      this.lightWohnzimmer = connections.lightInfoWohnzimmer()
    }
    
  }
</script>

<style scoped>
  #on {
    margin-bottom: 10px;
  }
</style>
