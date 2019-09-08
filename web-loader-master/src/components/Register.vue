<template>
<div style="padding-top:180px;" align="center">
    
      {{userNoww}}
    <p style="font-size:50px">LOGIN</p>
    <div class="flex flex-center">
        <img src="../assets/ojk.png" style="width:250px"/>
        <q-form @submit="onSubmit">
            <div class="q-pa-md">
                <div align="left" style="margin-bottom:20px">
                    Email
                    <q-input 
                        outlined 
                        v-model="email" 
                    />
                </div>
                
                <div align="left" style="margin-bottom:20px">
                    Full Name
                    <q-input 
                        outlined 
                        v-model="full_name" 
                    />
                </div>

                <div align="left" style="margin-bottom:20px">
                    Username
                    <q-input 
                        outlined 
                        v-model="username" 
                    />
                </div>

                <div align="left" style="margin-bottom:20px">
                    Password
                    <q-input 
                        outlined 
                        v-model="password" 
                        type="password"
                    />
                </div>

                <div align="left" style="margin-bottom:20px">
                    Confirm Password
                    <q-input 
                        outlined 
                        v-model="confirm_password" 
                        type="password"
                        key=""
                    />
                </div>

                <div align="left" style="margin-bottom:20px">
                    Address
                    <q-input 
                        outlined 
                        v-model="address" 
                    />
                </div>
            </div>
            
            <div align="right" style="margin-right:18px">
                <q-btn color="deep-orange" push type="submit">
                    <div class="row items-right no-wrap" align="right">
                        <div class="text-center">
                            Login
                        </div>
                    </div>
                </q-btn>
            </div>

            <a href="#">Forgot Your Passowrd</a>
        </q-form>
    </div>
    
</div>
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
                roles:3
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




