'use strict';

module.exports = function(Commodity) {

    //get commodity by name
    Commodity.remoteMethod(
        'getCommodityName', {
            description: 'get by commodity name like',
            accepts:[{
                arg:'name', type:'string'
            }],
            returns:{
                arg:'res', type:'object', root:true
            },
            http:{
                path:'/getCommodityName', verb:'get'
            }
        }
    );
    Commodity.getCommodityName = function(name, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where:{
                    name:{
                        like: name
                    }
                }
            }

            Commodity.find(filter, function(err, result){
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




    //get commodity by categories
    Commodity.remoteMethod(
        'searchByCategory',
        {
            description:'search commodity by category',
            accepts:[
                {
                    arg:'category', type:'string'
                }
            ],
            returns:{
                arg:'res', type:'object', root:true
            },
            http:{
                path:'/searchByCategory', verb:'get'
            }
        }
    );
    Commodity.searchByCategory = function(category, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where:{
                    category:{
                        like: category
                    }
                }
            }

            //querying filter
            Commodity.find(filter, function(err, result){
                if(err) reject(err)
                if(result === null){
                    err = new Error("commodity in this category is empty")
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





    //get commodity with filter by limit
    Commodity.remoteMethod(
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
                path:'/limitCommodity', verb:'get'
            }
        }
    );
    Commodity.limit = function(limits, callback){
        new Promise(function(resolve, reject){

            //querying filter
            Commodity.find({limit: limits}, function(err, result){
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
