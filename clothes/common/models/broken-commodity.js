'use strict';

module.exports = function(BrokenCommodity) {
    //get commodity by name
    BrokenCommodity.remoteMethod(
        'brokenCommodity', {
            description: 'get by commodity name like',
            accepts:[{
                arg:'name', type:'string'
            }],
            returns:{
                arg:'res', type:'object', root:true
            },
            http:{
                path:'/BrokenCommodity', verb:'post'
            }
        }
    );
    // Brokencommodity.BrokenCommodity = function(name, callback){
    //     new Promise(function(resolve, reject){
    //         var filter = {
    //             where:{
    //                 name:{
    //                     like: name
    //                 }
    //             }
    //         }

    //         Brokencommodity.find(filter, function(err, result){
    //             if(err) reject(err)
    //             if(result === null){
    //                 err = new Error("barang tidak ada")
    //                 err.statusCode = 404
    //                 reject(err)
    //             }
    //             resolve(err)
    //         })
    //     }).then(function(res){
    //         if(!res) callback(err)
    //         return callback(null, res)
    //     }).catch(function(err){
    //         callback(err)
    //     });
    // }
};
