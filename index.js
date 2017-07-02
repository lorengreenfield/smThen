module.exports = function(serverMethod, ...args){
    return new Promise((resolve, reject) =>{
        serverMethod(...args, (err, result) =>{

            if(err){
                return reject(err);
            }

            resolve(result);
        })
    });
};