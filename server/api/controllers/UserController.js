/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
   getUsers: async(req,res)=>{
      
      User.find((err,user)=>{
          if(err){
              return res.status(400).JSON({success:false,messages:"user not found"});
          }
          return res.ok({
              success:true,
              user:usersssss
          })
      })
     

   },
   getUser:async(req,res)=>{
       const id= req.params.id;
       console.log(id)
       try {
            const resuer = await User.findOne(req.params.id);
        
           if(!resuer){
               res.json({success:false,messages:"user not found"});
           }
           return res.json({success:true,messages:"find one user successFully",resuer});
       } catch (error) {
        return res.json({success:false,messages:"internal server errorsaasa "});
       }

   },

   createUer: async(req,res)=>{
       const {id,name,age,address,salary,email,password}=req.body;
       const resp = req.body;
       if(!id||!name||!age||!address||!salary||!email||!password){
           return res.json({success:false,messages:"missing Information"})
       }
       let str = `insert into users(id,name,age,address,salary,email,password)
       values(${id},'${name}',${age},'${address}',${salary},'${email}','${password}')`;
    
       try {
            await User.query(str,function(err,user){
                if(err){
                    const errors = err.messages;
                    return res.json({success:false,messages:"create  do user not success",errors});
                }
              return res.json({success:true,messages:" create user success",user});
            });
       } catch (error) {
           console.log(error.messages);
        return res.json({success:false,messages:"internal server error"});
       }
   },

   updateUser: async(req,res)=>{
    const {name,age,address,salary,email,password}=req.body;
    const _id = req.params.id;
try {
    const resuer = await User.findOne(req.params.id);
    if(!resuer){
        res.json({success:false,messages:"user not found"});
    }
    const ojectUer = {
        id:resuer.id,
        name:name ||resuer.name,
        age:age||resuer.age,
        address:address||resuer.address,
        salary:salary||resuer.salary,
        email:email||resuer.email,
        password:password||password
    }
    const strQuery = `update users set name ='${ojectUer.name}',age ='${ojectUer.age}',
    address ='${ojectUer.address}',salary ='${ojectUer.salary}',email ='${ojectUer.email}',password ='${ojectUer.password}'
    where id=${_id};
    `;

    await User.query(strQuery,function(err,user){
        if(err){
            const errors = err.messages;
            return res.json({success:false,messages:"update  do user not success",errors});
        }
        return res.json({success:true,messages:"updated user  success",user:ojectUer});
    });
} catch (error) {
    console.log(error.messages);
    return res.json({success:false,messages:"internal server error"});
}
   },

   deleteUser:async(req,res)=>{
    const _id = req.params.id;

    // try {
    //     const user =  await User.destroy(_id);
    //     if(!user){
    //         return res.json({success:false,messages:"deleted user not success"});
    //     }
    //     return res.json({success:true,messages:"delete user  success",user:user});
    // } catch (error) {
    //     console.log(error)
    //     return res.json({success:false,messages:"internal server error"});
    // }
    try {
        const resuer = await User.findOne(req.params.id);
        if(!resuer){
           return  res.json({success:false,messages:"user not found"});
        }
         const strQuery = `delete from users where id=${_id}`;
          await User.query(strQuery,function(err,user){
            if(err){
                return res.json({success:false,messages:"deleted user not success"});
            }
            return res.json({success:true,messages:"updated user  success",user:resuer});
        })
    } catch (error) {
        console.log(error)
        return res.json({success:false,messages:"internal server error"});
    }
  }
   

};

