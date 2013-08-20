define([
   'underscore',
   'backbone',
   'models/clientModel'
], function(_, Backbone,Client){
   var Clients = Backbone.Collection.extend({
    	//Esta es nuestra colección de los 'Clientes' y sostiene nuestros modelos 'Cliente'.
      initialize: function (models, options) {
        console.log('initialize de Collection');
      },

      comparator: function(client){
        // ordenamos por el atributo nombre
        return client.attributes.nombre;
     },

       model: Client
   });

   return Clients;
});