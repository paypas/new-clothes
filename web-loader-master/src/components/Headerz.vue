<template>
<div>
    <q-header elevated  class="bg-black">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Web Loader App
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>  
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Sidebar</q-item-label>
        <q-item clickable tag="a" href="/#/mainmenu">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
            <q-item-label caption>Main Menu</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/berita">
          <q-item-section avatar>
            <q-icon name="cloud_upload" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Berita</q-item-label>
            <q-item-label caption>Upload Berita</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/assesment">
          <q-item-section avatar>
            <q-icon name="cloud_upload" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Assesment</q-item-label>
            <q-item-label caption>Upload Assesment</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/history">
          <q-item-section avatar>
            <q-icon name="history" />
          </q-item-section>
          <q-item-section>
            <q-item-label>History</q-item-label>
            <q-item-label caption>History Upload</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a"  @click="logout()">
          <q-item-section avatar>
            <q-icon name="exit_to_app" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
            <q-item-label caption>Keluar dari aplikasi</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
</div>
</template>
<script>
export default {
  data () {
    return {
      leftDrawerOpen: !this.$q.platform.is.desktop
    }
  },

  methods:{
    logout(){
      this.$ls.remove("userNow")
      this.$router.push("/")
    }
  }
}
</script>
