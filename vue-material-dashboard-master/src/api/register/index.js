import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth, getApiNoAuthSpringBoot} from '../utils'

Vue.use(VueResource)

export default {
    registerUser(credentials, window){
        let self = this;
        return getApiNoAuth().post('Users', credentials)
        .then(function(response){
            console.log(response)
            localStorage.setItem('token', response.data.id);
            return response.data;
        }).catch(function(err){
            console.log(err)
        })    
    },

    registerUserSpringBoot(credentials, window){
        let self = this;
        return getApiNoAuthSpringBoot().post('user/register', credentials)
        .then(function(response){
            console.log(response)
            localStorage.setItem('token', response.data.id);
            return response.data;
        }).catch(function(err){
            console.log(err)
        })    
    }
}