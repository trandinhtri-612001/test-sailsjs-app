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
    'get /':'UserController.test',
'get /api/users':'UserController.getUsers',
'post /api/users':'UserController.createUer',
'get /api/users/:id':'UserController.getUser',
'put /api/users/:id':'UserController.updateUser',
'delete /api/users/:id':'UserController.deleteUser',
'get /socket/user':'UserController.testSocket',
};
