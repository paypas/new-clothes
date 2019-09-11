<template>
<div>
    <q-header elevated  class="bg-red">
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
          Welcome {{this.$ls.get("userNow")}}
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
        <q-item clickable tag="a" href="/#/owner/commodity">
          <q-item-section avatar>
            <q-icon name="trending_up" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Grafik Barang</q-item-label>
            <q-item-label caption>Menampilkan grafik barang masuk dan rusak</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/owner/transaction">
          <q-item-section avatar>
            <q-icon name="shopping_cart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Grafik Penjualan</q-item-label>
            <q-item-label caption>Menampilkan grafik barang masuk dan rusak</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/owner/profile">
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Profile</q-item-label>
            <q-item-label caption>Profil Owner</q-item-label>
          </q-item-section>
        </q-item>
        <!-- <q-item clickable tag="a" href="/#/history">
          <q-item-section avatar>
            <q-icon name="history" />
          </q-item-section>
          <q-item-section>
            <q-item-label>History</q-item-label>
            <q-item-label caption>History Upload</q-item-label>
          </q-item-section>
        </q-item> -->
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
      this.$ls.remove("jsonTransaction")
      this.$ls.remove("tokenSpringBoot")
      this.$ls.remove("tokenLoopback")
      this.$ls.remove("token")
      this.$ls.remove("json")
      this.$router.push("/")
    }
  }
}
</script>
