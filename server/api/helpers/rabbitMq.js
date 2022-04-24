const amqp = require("amqplib")
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

    

    
 connect:async()=>{
       try {
           const amqpServer = "amqp://localhost:5672";
           
           const connection = await amqp.connect(amqpServer)
            const channel = await connection.createChannel();
           if(channel){
           console.log("connect rabbitmq successfully");
          const queue = "cart-service";
          
        
            postQueue(connection,queue);
           // deleteQueue(connection,queue);   
   
           }else{
              
               console.log("connect rabbitmq do not success")
           }
           
   
           
         
       }
       catch(ex) {
           console.error(ex)
       }
   
},
 deleteQueue: async(connection,queue)=>{
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
await channel.deleteQueue(queue,(err,ok)=>{
    if(err){
        console.log("can not delete   queue")
    }
    console.log("delete queue ok" +ok)
})
console.log("delete queue ok" )
},

 postQueue: async(connection,queue)=>{
    try {
        const channel = await connection.createChannel();
        await channel.assertQueue(queue);
        channel.sendToQueue(queue, Buffer.from("Hi it works"))
        console.log("Waiting for messages...");
    } catch (error) {
        console.error(error)
    }
     
}










  
  
  
  
  
  
  };


