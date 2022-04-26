/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    
'get /api/users':'UserController.getUsers',
'post /api/users':'UserController.createUer',
'get /api/users/:id':'UserController.getUser',
'put /api/users/:id':'UserController.updateUser',
'delete /api/users/:id':'UserController.deleteUser',
//create queue to rabbitmq and add queue to mongodb;
'post /api/queue/addFull':'MessagesController.postQueueController',
//delete queue to rabbitmq;
'delete /api/queue/:queueName':'MessagesController.deleteQueue',
//create queue to rabbitmq;
'post /api/queue':'MessagesController.createQueueToRabbit',
//get queue by rabbitmq and add queue to mongodb
'post /api/queue/:queueName':'MessagesController.popQueueController',
//pop queue
'post /api/queue/pop/:queueName':'MessagesController.popQueue',

///test api
'post /api/test':'MessagesController.test',
'get /api/test':'MessagesController.get',
};
