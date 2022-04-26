/**
 * Messages.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

 
conection:'mongoDb',
  attributes: {
    title: {
      type: 'string',
      required: true
    },
    content: {
      type: 'string',
      required: true
    }
  },



  createQueue:async(data)=>{
    console.log(data)
     await Messages.create(data).exec(function(err, resQueue) {
      if (err) {
        console.log("29"+err)
          return res.serverError(err);
      }
      console.log("32"+resQueue)
  return resQueue;
     })
    
    
  },
  getFull: async ()=>{
    const resp = await Messages.find();
   return resp;
  },


};

