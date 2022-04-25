/**
 * MessagesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
 const {postQueue,deleteQueue} = require("../helpers/rabbitMq")
module.exports = {
    postQueue:async (req,res)=>{
        const {queueName,data} = req.body;
       
        try {
            const resp = await postQueue(queueName,data);
         if(resp== false){
             res.json({success:false,messages:"create new queue do not success"});
         }
         return res.json({success:true,messages:"create new queue successFully"});
        
        
        } catch (error) {
        console.log(error);
            return res.json({success:false,messages:"internal server error"})
            
        }
         
          },
          deleteQueue:async(req,res)=>{
            const queueName= req.params.queueName;
            try {
                const resp = await deleteQueue(queueName);
             if(resp== false){
                 res.json({success:false,messages:" queue deleted do not success"});
             }
             return res.json({success:true,messages:" queue deleted successFully"});
            
        
            } catch (error) {
            
                return res.json({success:false,messages:"internal server error"})
                
            }
          }
           
        
        

};

