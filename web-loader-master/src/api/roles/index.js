import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils'

Vue.use(VueResource)

export default{
    getDataRoles(window){
        return getApiNoAuth()
        .get('http://localhost:3000/api/Employees?filter=%7B%22include%22%3A%22roles%22%7D')
        .then(function(response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}