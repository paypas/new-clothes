<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);">
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Login</h4>
            <!-- <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="add" color="purple-4" />
            </div> -->
          </q-card-section>
          <q-card-section>
                <q-form class="q-px-sm q-pt-xl" @submit="onSubmit">
                <q-input square clearable v-model="email" type="email" label="Email">
                    <template v-slot:prepend>
                    <q-icon name="email" />
                    </template>
                </q-input>
                <q-input square clearable v-model="password" type="password" label="Password">
                    <template v-slot:prepend>
                    <q-icon name="lock" />
                    </template>
                </q-input>
              
                <q-card-actions class="q-px-lg">
                    <q-btn unelevated size="lg" push type="submit" color="purple-4" class="full-width text-white" label="Sign In" />
                </q-card-actions>
                <q-card-section class="text-center q-pa-sm">
                    <p class="text-grey-6">Forgot your password?</p>
                </q-card-section>
                <q-card-section class="text-center q-pa-sm">
                    <a href="#/register"><p class="text-grey-6">Doesn't have account? Register here</p></a>
                </q-card-section>
            </q-form>
          </q-card-section>
          <!-- <q-card-section>
            <div class="text-center q-pa-md q-gutter-md">
              <q-btn round color="indigo-7">
                <q-icon name="fab fa-facebook-f" size="1.2rem" />
              </q-btn>
              <q-btn round color="red-8">
                <q-icon name="fab fa-google-plus-g" size="1.2rem" />
              </q-btn>
              <q-btn round color="light-blue-5">
                <q-icon name="fab fa-twitter" size="1.2rem" />
              </q-btn>
            </div>
          </q-card-section> -->
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import login_api from '../api/login/index';
import roles from '../api/roles/index';
export default{
    name:'login2',

    data(){
        return {
            userNow:'',
            email:'',
            password:''
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
                email:self.email,
                password:self.password
            };

            login_api
                .loginUser(credentials, self.password)
                .then(function(result) {
                // roles
                // .getDataRoles(window).then(function(res){
                //     console.log(res)
                //     self.dataRoles = res
                // })





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