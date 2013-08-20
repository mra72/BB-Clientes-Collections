define([
  'jquery',
  'underscore',
  'backbone',
  'models/clientModel',
  'collections/clientsCollection',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/contenidoTemplate.html'
], function($, _, Backbone, Client, Clients, ContenidoTemplate){
  var ContenidoView = Backbone.View.extend({
      el: $("#container"),
      initialize: function () {
        
      },

      render: function(eventName,err)
      {

        var data = {}; // La data se define a vacia porque aun no estamos interactuabdo con json.
        //data = JSON.stringify(clients_collection);

        console.log(this.model);
        console.log(this.model.toJSON());
        data = this.model.toJSON();
        
        console.log(data);
     
        //var compiledTemplate = _.template(ContenidoTemplate, {'clients': data});
        var compiledTemplate = _.template(ContenidoTemplate);
        // Append our compiled template to this Views "el"
        //this.$el.append(compiledTemplate);

        this.$el.append(compiledTemplate(data));
      }


  });

  
 /*for (var i = 0; i <= clients_collection.length - 1; i++){
    //$('#nombre').append(clients_collection.models[i].get('nombre'));
    //$('#edad').append(clients_collection.models[i].get('edad'));

    console.log(clients_collection.models[i].get('nombre'));
    console.log(clients_collection.models[i].get('edad'));
    $('#container').append('<span>'+clients_collection.models[i].get('nombre')+'</span></br><span>'+
      clients_collection.models[i].get('edad')+'</span></br>');
 }*/
 
  return ContenidoView;
});
