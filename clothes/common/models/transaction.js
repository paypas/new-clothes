'use strict';

module.exports = function(Transaction) {
    //get transaction with filter by limit
    Transaction.remoteMethod(
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
                path:'/limitTransaction', verb:'get'
            }
        }
    );
    Transaction.limit = function(limits, callback){
        new Promise(function(resolve, reject){

            //querying filter
            Transaction.find({limit: limits}, function(err, result){
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
