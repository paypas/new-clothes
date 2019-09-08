<template>
<div style="padding-top:180px;" align="center">
    
      {{userNoww}}
    <p style="font-size:50px">LOGIN</p>
    <div class="flex flex-center">
        <img src="../assets/ojk.png" style="width:250px"/>
        <q-form @submit="onSubmit">
            <div class="q-pa-md">
                <div align="left" style="margin-bottom:20px">
                    Username
                    <q-input 
                        outlined 
                        v-model="username" 
                    />
                </div>
                <div align="left">
                    Password
                    <q-input 
                        outlined 
                        v-model="password" 
                        type="password"
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
import login_api from '../api/login/index';
import roles from '../api/roles/index';
export default{
    name:'login2',

    data(){
        return {
            userNow:'',
            username:'',
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
                username:self.username,
                password:self.password
            };

            login_api
                .loginUser(credentials, self.password)
                .then(function(result) {
                roles
                .getDataRoles(window).then(function(res){
                    console.log(res)
                    self.dataRoles = res
                })





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