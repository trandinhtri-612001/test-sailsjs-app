
// const redis = require('redis');
const {createClient} = require('redis');
// const client = redis.createClient();

const client = createClient();
module.exports = {


    friendlyName: 'User',
  
  
    description: 'User something.',
  
  
    inputs: {
  
    },
  
  
    exits: {
  
      success: {
        description: 'All done.',
      },
  
    },
  
  
    fn: async function (inputs) {
       
    },
   create:async(key,value)=>{
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
    
    const resData = await client.set(key,value);
    // await client.publish(key,value);
    if(!resData){
      console.log("add messages do not success");
      await client.disconnect();
    }
     console.log("add success messages");
    return resData;
   },
   getDetail:async(key)=>{
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
    const resData = await client.get(key);
// await client.subscribe(key,(mess)=>{
//   console.log(mess)
// })
    if(!resData){
      console.log("get messages do not success");
      await client.disconnect();
    }
    console.log(resData);
    return resData;

   },
   update:async(key,value)=>{
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
    
    const resData = await client.set(key,value);

    if(!resData){
      console.log("add messages do not success");
      await client.disconnect();
    }
     console.log("add success messages");
    return resData;
   }



}