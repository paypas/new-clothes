'use strict';

module.exports = function(Users) {
    //get users data by username
    Users.remoteMethod(
        'getUsersByUsername', {
            description: 'get user data by username',
            accepts:[{
                arg:'username', type:'string'
            }],
            returns:{
                arg:'res', type:'object', root:true
            },
            http:{
                path:'/getUsersByUsername', verb:'get'
            }
        }
    );
    Users.getUsersByUsername = function(username, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where:{
                    username:{
                        like: username
                    }
                }
            }

            Users.find(filter, function(err, result){
                if(err) reject(err)
                if(result === null){
                    err = new Error("barang tidak ada")
                    err.statusCode = 404
                    reject(err)
                }
                resolve(err)
            })
        }).then(function(res){
            if(!res) callback(err)
            return callback(null, res)
        }).catch(function(err){
            callback(err)
        });
    }




    //get users data by email
    Users.remoteMethod(
        'getUsersByEmail', {
            description: 'get user data by email',
            accepts:[{
                arg:'email', type:'string'
            }],
            returns:{
                arg:'res', type:'object', root:true
            },
            http:{
                path:'/getUsersByEmail', verb:'get'
            }
        }
    );
    Users.getUsersByEmail = function(email, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where:{
                    email:{
                        like: email
                    }
                }
            }

            Users.find(filter, function(err, result){
                if(err) reject(err)
                if(result === null){
                    err = new Error("barang tidak ada")
                    err.statusCode = 404
                    reject(err)
                }
                resolve(err)
            })
        }).then(function(res){
            if(!res) callback(err)
            return callback(null, res)
        }).catch(function(err){
            callback(err)
        });
    }


    //get users with filter by limit
    Users.remoteMethod(
        'limit',
        {
            description:'get category with limit',
            accepts:[
                {
                    arg:'limit', type:'number'
                }
            ],
            returns:{
                arg:'res', type:'object', root:true
            },
            http:{
                path:'/limitUsers', verb:'get'
            }
        }
    );
    Users.limit = function(limits, callback){
        new Promise(function(resolve, reject){

            //querying filter
            Users.find({limit: limits}, function(err, result){
                if(err) reject(err)
                if(result === null){
                    err = new Error("select your limit")
                    err.statusCode = 404
                    reject(err)
                }
                resolve(result)
            });
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }
};
