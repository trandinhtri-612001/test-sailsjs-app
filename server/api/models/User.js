/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
tableName:'users',
conection:' default',
  attributes: {
 
    name:{
      type: 'string',
     required: true,
     allowNull: false
     },
    age:{ 
      type: 'number',
      
      
       },
    address:{
      type:'string'
    },
    salary:{
      type:'number'
    },
    email:{
      type:'string',
      isEmail:true,
      allowNull: false
    },
    password:{
      type:'string',
      required: true,
      allowNull: false
    },
    phone:{
      type:'string',
      required:true

    },

  },


  getFullUser: async ()=>{
    const resUser = await User.find();
   return resUser;
  },
  getUser: async(_id)=>{
   const resUser =  await User.findOne({id:_id});
   return resUser;
  },
  creatUser:async (data)=>{
     await User.create(data).exec(function(err, resUser) {
      if (err) {
          return res.serverError(err);
      }
    return resUser;
     })
    
  },

  updateUser:async(_id,data)=>{
    const resUser =  await User.updateOne({id:_id}).set(data);
    return resUser;
  },
  deleteUser:async(_id)=>{
    const resUser = await User.destroyOne({id:_id});
    return  resUser;
  }

};

