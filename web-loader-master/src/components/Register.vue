<template>
<q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);">
<div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Registration</h4>
            <!-- <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="close" color="purple-4" />
            </div> -->
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg" @submit="onSubmit">
                <q-input square clearable v-model="full_name" label="Nama Lengkap">
                    <template v-slot:prepend>
                    <q-icon name="person" />
                    </template>
                </q-input>
                <q-input square clearable v-model="email" type="email" label="Email">
                    <template v-slot:prepend>
                    <q-icon name="email" />
                    </template>
                </q-input>
                <q-input square clearable v-model="username" type="username" label="Username">
                    <template v-slot:prepend>
                    <q-icon name="person" />
                    </template>
                </q-input>
                <q-input square clearable v-model="password" type="password" label="Password">
                    <template v-slot:prepend>
                    <q-icon name="lock" />
                    </template>
                </q-input>
                <q-input square clearable v-model="address" label="Alamat">
                    <template v-slot:prepend>
                    <q-icon name="home" />
                    </template>
                </q-input>
                <q-card-actions class="q-px-lg">
                    <q-btn unelevated size="lg" color="purple-4" push type="submit" class="full-width text-white" label="Sign Up" />
                </q-card-actions>
                <q-card-section class="text-center q-pa-sm">
                    <a href=""><p class="text-grey-6">Return to login</p></a>
                </q-card-section>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
</q-page>
</template>

<script>
import register_api from '../api/register/index';
export default{
    name:'register',

    data(){
        return {
            email: '',
            full_name: '',
            username: '',
            password: '',
            confirm_password: '',
            address:''
        };
    },

    computed:{
        userNoww(){
                this.$ls.get("userNow");

        }
    },

    methods:{
        onSubmit(){
            let self= this;

            let credentials = {
                email: self.email,
                full_name: self.full_name,
                username:self.username,
                password:self.password,
                address: self.address
            };

            let credentials2 = {
                email: self.email,
                username:self.username,
                password:self.password,
                roles:"customer"
            };

            register_api
                .registerUser(credentials2, self.password)
                .then(function(result) {
                if (!result) {
                    self.$q.notify({
                    color: "red-5",
                    textColor: "white",
                    icon: "fas fa-exclamation-triangle",
                    message: "Wrong Username or Password"
                    });
                } else {
                    self.$q.notify({
                    color: "green-4",
                    textColor: "white",
                    icon: "fas fa-check-circle",
                    message: "You're Logged In"
                    });
                    self.$ls.set("userNow", result.id);
                    console.log("id nya dia = ", self.$ls.get("userNow"))
                    // self.$router.push("mainmenu");
                }
                return result;
                })
                .catch(function(err) {
                console.log(err);
                });


                register_api
                .registerUserSpringBoot(credentials, self.password)
                .then(function(result) {
                if (!result) {
                    self.$q.notify({
                    color: "red-5",
                    textColor: "white",
                    icon: "fas fa-exclamation-triangle",
                    message: "Wrong Username or Password"
                    });
                } else {
                    self.$q.notify({
                    color: "green-4",
                    textColor: "white",
                    icon: "fas fa-check-circle",
                    message: "You're Logged In"
                    });
                    self.$ls.set("userNow", result.id);
                    console.log("id nya dia = ", self.$ls.get("userNow"))
                    // self.$router.push("mainmenu");
                }
                return result;
                })
                .catch(function(err) {
                console.log(err);
                });
        }
    }

}
</script>

<style>

</style>




