<template>
<div style="text-align:center;">
        <h3>Main Menu</h3>
      
<div class="row">
    <div style="margin:40px">
        <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #404040 0%, #202020 100%)"
        @click="berita()"
        >
        <q-card-section>
            <div class="text-h6">Berita</div>
            <div class="text-subtitle2">Upload Berita</div>
        </q-card-section>

        <q-card-section>
            <img src="../assets/logo.png" alt="Logo Tekno" height="150" width="150" margin="20px" />
        </q-card-section>
        </q-card>
    </div>
    <div style="margin:40px">
        <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #404040 0%, #202020 100%)"
        @click="assesment()"
        >
        <q-card-section>
            <div class="text-h6">Assesment</div>
            <div class="text-subtitle2">Upload Assesment</div>
        </q-card-section>

        <q-card-section>
            <img src="../assets/logo.png" alt="Logo Tekno" height="150" width="150" margin="20px" />
        </q-card-section>
        </q-card>
    </div>
    <div style="margin:40px">
        <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #404040 0%, #202020 100%)"
        @click="history()"
        >
        <q-card-section>
            <div class="text-h6">History</div>
            <div class="text-subtitle2">History Upload</div>
            
        </q-card-section>

        <q-card-section>
            <img src="../assets/logo.png" alt="Logo Tekno" height="150" width="150" margin="20px" />
        </q-card-section>
        </q-card>
    </div>
    <div style="margin:40px">
        <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #404040 0%, #202020 100%)"
        >
        <q-card-section>
            <div class="text-h6">Menu 4</div>
            <div class="text-subtitle2">by Mahpudeen</div>
        </q-card-section>

        <q-card-section>
            <img src="../assets/logo.png" alt="Logo Tekno" height="150" width="150" margin="20px" />
        </q-card-section>
        </q-card>
    </div>
    <div style="margin:40px">
        <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #404040 0%, #202020 100%)"
        >
        <q-card-section>
            <div class="text-h6">Menu 5</div>
            <div class="text-subtitle2">by Mahpudeen</div>
        </q-card-section>

        <q-card-section>
            <img src="../assets/logo.png" alt="Logo Tekno" height="150" width="150" margin="20px" />
        </q-card-section>
        </q-card>
    </div>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      lorem: 'Ini Menu'
    }
  },
  methods: {
    berita() {
      let self= this;
      self.$router.push("/berita");
    },
    assesment() {
        let self= this;
        self.$router.push("/assesment");
    },
    history() {
        let self= this;
        self.$router.push("/history");
    }
  }
}
</script>
<style lang="stylus" scoped>
.my-card
  width 100%
  max-width 250px
.body {
    background :#101010
}
</style>