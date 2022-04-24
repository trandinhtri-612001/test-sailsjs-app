/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
 'use strict';
 const bcrypt = require('bcrypt');

module.exports = {
tableName:'users',
conection:' postGres',
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
// hash password
  //  hashUserPassword(values, next){
  //   bcrypt.genSalt(10, (err, salt) => {
  //     if (err) {
  //         sails.log.error(err);
  //         return next();
  //     }

  //     bcrypt.hash(values.password, salt, (err, hash) => {
  //         if (err) {
  //             sails.log.error(err);
  //             return next();
  //         }
  //         values.encryptedPassword = hash; // Here is our encrypted password
  //         return next();
  //     });
  // });
  //  },
   //verify user password
   
//   verifyPassword(password, userPassword) {

//     return new Promise(function(resolve, reject) {
//         bcrypt.compare(password, userPassword, (err, match) => {
//             if (err) {
//                 sails.log.error(err);
//                 return reject("Something went wrong!");
//             }
//             if (match) return resolve();
//             else return reject("Mismatch passwords");
//         });
//     });
// },


// work in data
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

