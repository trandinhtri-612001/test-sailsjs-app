const amqp = require("amqplib")

const deleteQueue = async(connection,queue)=>{
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
await channel.deleteQueue(queue,(err,ok)=>{
    if(err){
        console.log("can not delete   queue")
    }
    console.log("delete queue ok" +ok)
})
console.log("delete queue ok" )
}

const postQueue = async(connection,queue)=>{
    try {
        const channel = await connection.createChannel();
        await channel.assertQueue(queue);
        channel.sendToQueue(queue, Buffer.from("Hi it works"))
        console.log("Waiting for messages...");
    } catch (error) {
        console.error(error)
    }
     
}


connect();
 async function connect(){
    try {
        const amqpServer = "amqp://localhost:5672";
        
        const connection = await amqp.connect(amqpServer)
         const channel = await connection.createChannel();
        if(channel){
        console.log("connect rabbitmq successfully");
       const queue = "cart-service";
       
     
        //  postQueue(connection,queue);
        deleteQueue(connection,queue);   

        }else{
           
            console.log("connect rabbitmq do not success")
        }
        

        
      
    }
    catch(ex) {
        console.error(ex)
    }
}






