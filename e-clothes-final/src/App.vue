<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      
      <headerowner v-if="['ownerDashboard', 'commodityOwner', 'transactionOwner'].indexOf($route.name) > -1"/>
      <!-- <headery v-if="['login'].indexOf($route.name) > -1"/> -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Headerowner from "@/components/owner/HeaderOwner.vue"
// import Headery from "@/components/Headery.vue"

export default {
  name: 'LayoutDefault',

  components: {
    Headerowner
    // Headery
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
