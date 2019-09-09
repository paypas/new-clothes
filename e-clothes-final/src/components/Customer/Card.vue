<template>
 <div class="q-pa-md">
   
<div class="row justify-center">
</div>
 <div class="bar">
    <q-toolbar class="bg-black text-white shadow-2">
        <q-btn round color="primary" icon="shopping_cart" />
      <q-tabs v-model="tab"  class="text-white shadow-2">
        <q-tab name="login" label="Login" class="geserlogin"/>
        <q-tab name="sign up" label="Sign Up" class="gesersignup"/>
      </q-tabs>
    </q-toolbar>
  </div>

 <q-card>
     <div style = "position:absolute; top:100px; left:50px;"><h2> HEADING </h2></div>
      <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80">
    </q-card>

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


</style>