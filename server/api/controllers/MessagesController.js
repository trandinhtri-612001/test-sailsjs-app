/**
 * MessagesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
 const {postQueue,deleteQueue,popQueue} = require("../helpers/rabbitMq");
const Messages = require("../models/Messages");
 const {createQueue,getFull} = require("../models/Messages")
module.exports = {

    // //controllers create queue to rabbitmq and add queue to mongodb;
    postQueueController:async (req,res)=>{
        const {title,content} = req.body;
       
        try {
            const resp = await postQueue(title,content);
         if(resp== false){
             res.json({success:false,messages:"create new queue do not success"});
         }
         let data = {
            title,
            content
         }
         const resData = await createQueue(data);
        //  if(!resData){
             
        //     return res.json({success:true,messages:"create new queue do not success"});
        //  }
         return res.json({success:true,messages:"create new queue successFully",resData});
        
        
        } catch (error) {
        console.log(error);
            return res.json({success:false,messages:"internal server error"})
            
        }
         
          },
          //controller create queue to rabbitmq;
       createQueueToRabbit:async(req,res)=>{
        const {title,content} = req.body;
       
        try {
            const resp = await postQueue(title,content);
         if(resp== false){
             res.json({success:false,messages:"create new queue do not success"});
         }
         return res.json({success:true,messages:"create new queue successFully"});
        
        
        } catch (error) {
        console.log(error);
            return res.json({success:false,messages:"internal server error"});
            
        }

       },
       //get queue by rabbitmq and add queue to mongodb
       popQueueController:async(req,res)=>{
        const title= req.params.queueName;

        try {
           const resData =  await popQueue(title);
           console.log(resData);
           if(!resData){
               return res.json({success:false,messages:"queue not found"});
           }
           let data = {
               title,
               content:resData
           }
           const reverse = await createQueue(data);
//            if(!reverse){
// return res.json({success:false,messages:"get and add queue content do not success"});
//            }
           res.json({success:true,messages:"get and add queue successFully",data})
            
        } catch (error) {
            console.log(error);
            return res.json({success:false,messages:"internal server error"});
        }
       },

//delete queue to rabbitmq;
          deleteQueue:async(req,res)=>{
            const queueName= req.params.queueName;
            try {
                const resp = await deleteQueue(queueName);
             if(resp== false){
                 res.json({success:false,messages:" queue deleted do not success"});
             }
             return res.json({success:true,messages:" queue deleted successFully"});
            
        
            } catch (error) {
            
                return res.json({success:false,messages:"internal server error"});
                
            }
          },
          //pop queue
          popQueue:async(req,res)=>{
            const title= req.params.queueName;

            try {
               const resData =  await popQueue(title);
               console.log(resData);
               if(!resData){
                   return res.json({success:false,messages:"queue not found"});
               }
               let data = {
                   title,
                   content:resData
               }
             
               res.json({success:true,messages:"get and add queue successFully",data})
                
            } catch (error) {
                console.log(error);
                return res.json({success:false,messages:"internal server error"});
            }
          },

          test:async(req,res)=>{
             const { title,content} = req.body;
             try {
                let data = {
                    title,
                    content
                 }
                 const resData = await createQueue(data);
                 console.log("126"+resData);
                //  if(!resData){
                     
                //     return res.json({success:true,messages:"create new queue do not success"});
                //  }
                 return res.json({success:true,messages:"create new queue successFully"});
             } catch (error) {
                 console.log(error)
                return res.json({success:false,messages:"internal server error"});
             }
          },
          get:async(req,res)=>{
              try {
                  const resp = await getFull();
                  return res.json({success:true,messages:"get messages success",resp});
              } catch (error) {
                return res.json({success:false,messages:"internal server error"});
              }
          }
           
        
        

};

