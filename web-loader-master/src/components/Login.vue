<template>

    <div class="flex flex-center">
      {{userNoww}}
      <div class="q-pa-md" style="max-width: 350px; width:100%;text-align:center;">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          
            <img src="../assets/ojk.png" alt="Logo Tekno" height="120" width="300" margin="20px" />
          
          <q-input
            filled
            v-model="username"
            label="Username *"
            hint="Your Username"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            v-model="password"
            label="Password *"
            hint="Your Password"
            type="password"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <div>
            <q-btn label="Login" type="submit" color="black" />
            <q-btn label="Reset" type="reset" color="black" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    </div>
</template>

<style>
  .q-field__control{
    color: black !important;
  }
</style>

<script>
import login_api from '../api/login/index';
import roles from '../api/roles/index';

export default {
  name: 'Login',

  data() {
    return {
      username: "",
      password: "",
      userNow:"",
      dataRoles:[]
    };
  },

  computed:{
    userNoww(){
            this.$ls.get("userNow");

    }
  },

  methods:{

    onSubmit() {
      let self = this;

      let credentials = {
        username : self.username,
        password : self.password
      }

      console.log(credentials)
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
    },

    onReset() {
      this.username = null;
      this.password = null;
    }
  }
}
</script>
