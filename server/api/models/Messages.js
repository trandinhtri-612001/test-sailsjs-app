/**
 * Messages.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

primaryKey:'id',
 
  attributes: {
    id: { type: 'number',
     autoIncrement: true,
     
    },
    
    title: 'string',
    body: 'string',
   createdAt: { type: 'number', autoCreatedAt: true },
    updatedAt: { type: 'number', autoUpdatedAt: true },
  }

};

