/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const {  getFullUser,creatUser,getUser,updateUser,deleteUser } = require("../models/User");

module.exports = {


   getUsers:async (req,res)=>{
      const resUser = await  getFullUser();
          if(!resUser){
              return res.status(400).JSON({success:false,messages:"user not found"});
          }
          return res.json({
              success:true,
              messages:"find full user successFully",
              user:resUser
          })
   },
   getUser:async(req,res)=>{
       const _id= req.params.id;
      
       try {
            const resUser = await getUser(_id);
        
           if(!resUser){
               
               res.json({success:false,messages:"user not found"});
           }
           return res.json({success:true,messages:"find one user successFully",resUser});
       } catch (error) {
        console.log(error)
        return res.json({success:false,messages:"internal server error "});
       }

   },

   createUer: async(req,res)=>{
       const {name,age,address,salary,email,password,phone}=req.body;
     const newUser = req.body;
       if(!name||!age||!address||!salary||!email||!password||!phone){
           return res.json({success:false,messages:"missing Information"})
       }
       try {
            let data = {
                name:name,
                age:age,
                address:address,
                salary:salary,
                email:email,
                password:password,
                phone:phone,

            }
            const resUser = await creatUser(data);
             return res.json({success:true,messages:" create user success",resUser});   
       } catch (error) {
           console.log("looi "+error);
        return res.json({success:false,messages:"internal server error"});
       }
   },

   updateUser: async(req,res)=>{
    const {name,age,address,salary,email,password,phone}=req.body;
    const _id = req.params.id;
try {
    const resUer = await User.getUser(_id);
    if(!resUer){
        res.json({success:false,messages:"user not found"});
    }
    const ojectUer = {
        
        name:name ||resUer.name,
        age:age||resUer.age,
        address:address||resUer.address,
        salary:salary||resUer.salary,
        email:email||resUer.email,
        password:password||resUer.password,
        phone:phone||resUer.phone
    }
    
const resUser = await updateUser(_id,ojectUer)
if(!resUer){
    return res.json({success:false,messages:"update  do user not success",errors});
      }
       return res.json({success:true,messages:"updated user  success",user:resUser});

  

} catch (error) {
    console.log(error.messages);
    return res.json({success:false,messages:"internal server error"});
}
   },

   deleteUser:async(req,res)=>{
    const _id = req.params.id;
    try {
        const resUer = await getUser(_id);
        if(!resUer){
           return  res.json({success:false,messages:"user not found"});
        }
         const user = await deleteUser(_id);
         if(!user){
            return res.json({success:false,messages:"deleted user not success"});
         }
         return res.json({success:true,messages:"delete user  success",user:user});
      
    } catch (error) {
        console.log(error)
        return res.json({success:false,messages:"internal server error"});
    }
  }
   

};

