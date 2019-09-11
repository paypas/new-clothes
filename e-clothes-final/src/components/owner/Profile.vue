<template>
  <q-page
    style="background: linear-gradient(#ffffff, #ffffff);">
    <div>
      <div>
          <q-card-section>
            <h4 class="text-h5 text-black q-my-md">Profile</h4>
            <!-- <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="add" color="purple-4" />
            </div> -->
          </q-card-section>
          <q-card-section>
                <q-form class="" @submit="onSubmit">
                <q-input :disable="true" square clearable v-model="email" type="email" label="Email">
                    <template v-slot:prepend>
                    <q-icon name="email" />
                    </template>
                </q-input>
                <q-input square clearable v-model="full_name" type="text" label="full_name">
                    <template v-slot:prepend>
                    <q-icon name="account_circle" />
                    </template>
                </q-input>
                <q-input :disable="true" square clearable v-model="username" type="text" label="username">
                    <template v-slot:prepend>
                    <q-icon name="account_circle" />
                    </template>
                </q-input>
                <q-input square clearable v-model="address" type="text" label="address">
                    <template v-slot:prepend>
                    <q-icon name="home" />
                    </template>
                </q-input>
              
                <q-card-actions class="q-px-lg">
                    <q-btn unelevated size="lg" push type="submit" color="purple-4" class="full-width text-white" label="Save" />
                </q-card-actions>
            </q-form>
          </q-card-section>
      </div>
    </div>
  </q-page>
</template>

<script>
import user_api from '@/api/user/index';
import { Promise } from 'q';
export default{
    name:'profile',

    data(){
        return {
            userNow:'',
            email:'',
            username:'',
            full_name:'',
            address:'',
            password:'',
            roles:''
        };
    },

    // computed:{
    //     userNoww(){
    //             this.$ls.get("userNow");

    //     }
    // },

    mounted(){
      let self= this;
            
            var dataa = user_api
                .getUserSpringBoot(this.$ls.get("tokenSpringBoot"));

            Promise.all([dataa])
              .then( res => {
                console.log(res);
                JSON.parse(JSON.stringify(res), (key, value) => {
                    if(key === 'email'){
                        this.email = value;
                    }
                    if(key === 'full_name'){
                        this.full_name = value; 
                    }
                    if(key === 'username'){
                        this.username = value; 
                    }
                    if(key === 'address'){
                        this.address = value; 
                    }
                    if(key === 'roles'){
                      this.roles = value;
                    }
                    if(key === 'password'){
                      this.password = value;
                    }
                });
              })
              .catch(err=>{
                console.log(err);
              })
    },

    methods:{
        onSubmit(){
            let self= this;

            let credentials = {
                email:self.email,
                password:self.password,
                roles:self.roles,
                full_name:self.full_name,
                username:self.username,
                address:self.address
            };

            user_api
                .updateUserSpringBoot(this.$ls.get("tokenSpringBoot"), credentials)
                .then(function(result) {
                // roles
                // .getDataRoles(window).then(function(res){
                //     console.log(res)
                //     self.dataRoles = res
                // })
                console.log(result);





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
                    message: "Profile Updated"
                    });
                    // self.$ls.set("userNow", result.id);
                    // console.log("id nya dia = ", self.$ls.get("userNow"))
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