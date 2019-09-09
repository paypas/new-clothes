<template>
 <div class="q-pa-md">
   
<div class="row justify-center">
</div>
 <div class="bar">
    <q-toolbar class="bg-black text-white shadow-2">
        <q-btn round color="primary" icon="shopping_cart" />
      <q-tabs  class="text-white shadow-2" >
        <q-tab name="belanja" label="Belanja" class="geserbelanja" style="margin-top: -25px;"/>
        <q-tab name="notifikasi" label="Notifikasi" class="gesernotifikasi" style="margin-top: -25px;"/>
        <a href="#/login"><q-tab name="saya" label="Saya" class="gesersaya" style="margin-top: -25px;"/></a>
      </q-tabs>
    </q-toolbar>
  </div>

        <div style="margin-top:20px; margin-left:20px;">
            <div class="row">
                <div class="col">
                    <q-card class="my-card">
                        <img src="https://s.blanja.com/picspace/98/174178/700.700_53e3d5f5b78840cda03bac1ccf7e5920.jpg">

                        <q-card-section>
                            <div class="text-h6">Our Changing Planet</div>
                            <div class="text-subtitle2">by John Doe</div>
                            <q-btn style="background: #FF0080; color: white" label="Fuchsia" />
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col">
                    <q-card class="my-card">
                        <img src="https://s.blanja.com/picspace/98/174178/700.700_53e3d5f5b78840cda03bac1ccf7e5920.jpg">

                        <q-card-section>
                            <div class="text-h6">Our Changing Planet</div>
                            <div class="text-subtitle2">by John Doe   </div>
                            <q-btn style="background: #FF0080; color: white" label="Cek Stok" />
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col">
                    <q-card class="my-card">
                        <img src="https://s.blanja.com/picspace/98/174178/700.700_53e3d5f5b78840cda03bac1ccf7e5920.jpg">

                        <q-card-section>
                            <div class="text-h6">Our Changing Planet</div>
                            <div class="text-subtitle2">by John Doe</div>
                            <q-btn style="background: #FF0080; color: white" label="Fuchsia" />
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col">
                    <q-card class="my-card">
                        <img src="https://s.blanja.com/picspace/98/174178/700.700_53e3d5f5b78840cda03bac1ccf7e5920.jpg">

                        <q-card-section>
                            <div class="text-h6">Our Changing Planet</div>
                            <div class="text-subtitle2">by John Doe</div>
                            <q-btn style="background: #FF0080; color: white" label="Fuchsia" />
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="stylus" scoped>
.my-card{
  width :700px;
  height : 600px;
  max-width: 281px;
}
.geserbelanja{
  position: absolute;
  left: 900px;
}
.gesernotifikasi{
    position: absolute;
  left: 1000px;
}
.gesersaya{
    position: absolute;
  left: 1120px;
}



</style>