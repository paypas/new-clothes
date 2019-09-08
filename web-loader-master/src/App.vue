<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <headerz v-if="['mainmenu', 'history', 'uploadassesment', 'uploadberita'].indexOf($route.name) > -1"/>
      <headery v-if="['login'].indexOf($route.name) > -1"/>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Headerz from "@/components/Headerz.vue"
import Headery from "@/components/Headery.vue"

export default {
  name: 'LayoutDefault',

  components: {
    Headerz,
    Headery
  },

  data () {
    return {
      leftDrawerOpen: !this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
</style>
