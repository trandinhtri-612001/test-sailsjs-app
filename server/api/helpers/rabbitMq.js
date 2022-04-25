const amqp = require("amqplib")
const amqpServer = "amqp://localhost:5672";
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

     deleteQueue: async(queue)=>{
      const connection = await amqp.connect(amqpServer)
      const channel = await connection.createChannel();
      if(!channel){
        console.log("connect rabbitmq do not success")
      }
      try {
        const channel = await connection.createChannel();
     await channel.assertQueue(queue);
    await channel.deleteQueue(queue,(err,ok)=>{
     if(err){
         console.log("can not delete   queue")
         return false;
     }

     console.log("delete queue ok" );
     return true;
    })
    
      } catch (error) {
        console.error(error)
      }
     
    },
    
     postQueue : async(queue,data)=>{
      const connection = await amqp.connect(amqpServer)
      const channel = await connection.createChannel();
      if(!channel){
        console.log("connect rabbitmq do not success")
      }
     try {
         const channel = await connection.createChannel();
         await channel.assertQueue(queue);
         console.log(queue + data)
         channel.sendToQueue(queue, Buffer.from(data));
              console.log("Waiting for messages...");
              return true;
     } catch (error) {
         console.error(error)
     }
      
    },
    popQueue:async(queue)=>{
      const connection = await amqp.connect(amqpServer)
      const channel = await connection.createChannel();
      if(!channel){
        console.log("connect rabbitmq do not success")
      }
      try {
        let reverse;
        const channel = await connection.createChannel();
        await channel.assertQueue(queue);
         await channel.consume(queue,(msg)=>{
          reverse = msg.content.toString();
          console.log(`messages reverse: ${msg.content}`);
         
        })
        console.log(reverse.toString());
        return reverse;
      } catch (error) {
        console.error(error)
      }
    },
    
    
    
  };


