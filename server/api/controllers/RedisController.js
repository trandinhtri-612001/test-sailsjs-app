/**
 * RedisController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const {create,getDetail,update} = require('../helpers/redis');

module.exports = {

    createMessages:async(req,res)=>{
        const {key,value} = req.body;

        try {
                const resData = await create(key, value);
                if(!resData){
                    return res.json({success:false,messages:"create messages do not success"});
                }

        return res.json({success:true,messages:"create messages success",resData});
        } catch (error) {
            console.log(error)
            return res.json({success:false,messages:"internal server error"});
        }
    },
    getMessages:async(req,res)=>{
        const key = req.params.key;
       

        try {
            const resData = await getDetail(key);
            if(!resData){
                return res.json({success:false,messages:"messages not found"});
            }
            return res.json({success:true,messages:"get messages  success",mess:resData});
        } catch (error) {
            console.log(error)
            return res.json({success:false,messages:"internal server error"});
        }

    },
    updateMessages:async(req,res)=>{
        const {key,value} = req.body;
       

        try {
            const resp = await getDetail(key);
            if(!resp){
                return res.json({success:false,messages:"messages not found"});
            }
            const resData = await update(key,value);
            if(!resData){
                return res.json({success:false,messages:"messages not found"});
            }
            return res.json({success:true,messages:"update messages  success",mess:resData});
        } catch (error) {
            console.log(error)
            return res.json({success:false,messages:"internal server error"});
        }
    }
  

};

