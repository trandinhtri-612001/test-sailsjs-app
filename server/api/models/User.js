/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
tableName:'users',
primarykey:'id',
conection:' default',
  attributes: {
    id: { 
      type: 'string',
       required: true, 
       'autoIncrement':true,
       allowNull: false,
       unique: true,
      },
    name:{
      type: 'string',
     required: true,
     allowNull: false
     },
    age:{ 
      type: 'number',
       required: true
      
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


  getFull: async ()=>{
    const resUser = await User.find();
   return resUser;
  },
  getUser: async(_id)=>{
   const resUser =  await User.findOne(_id);
   return resUser;
  },
  creatUser:async (data)=>{
    const resUser = await User.create(data);
    return resUser;
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

