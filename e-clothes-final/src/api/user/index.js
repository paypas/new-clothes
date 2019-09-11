import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth, getApiNoAuthSpringBoot} from '../utils'

Vue.use(VueResource)

export default {

    getUserSpringBoot(data){
        // let self = this;
        return getApiNoAuthSpringBoot().get('user/'.concat(data))
        .then(function(response){
            console.log(response)
            // localStorage.setItem('token', response.data.id);
            return response.data;
        }).catch(function(err){
            console.log(err)
        })    
    },

    
    updateUserLoopback(data){
        // let self = this;
        return getApiNoAuth().post('Users', data)
        .then(function(response){
            console.log(response)
            // localStorage.setItem('token', response.data.id);
            return response.data;
        }).catch(function(err){
            console.log(err)
        })    
    },

    updateUserSpringBoot(id, data){
        return getApiNoAuthSpringBoot().put('user/update/'.concat(id), data)
        .then(function(response){
            console.log(response)
            // localStorage.setItem('token', response.data.id);
            return response.data;
        }).catch(function(err){
            console.log(err)
        })
    }
}