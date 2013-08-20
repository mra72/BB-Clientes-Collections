// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/clientModel',
  'collections/clientsCollection'
], function($, _, Backbone,Client, Clients){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    window.App.router=app_router;
    app_router.on('route:defaultAction', function(actions){
      console.log('routers');

      //******************************
      var client_model = new Client();//Creamos la instancia del modelo.       

        //Creamos un CLIENTE
        client_model.set({dni:'111R', nombre:'María', edad:40, Profesion:'Analista'});
        
        //Una vez creado mostramos el nombre por la consola. Para acceder a los valores de los atributos del modelo, 
        //no se hace de forma directa, si no que se hace a través del método get().
        console.log(client_model.get('nombre'));

        //Mostramos los atributos del Modelo creado. A través del método attributes().
        console.log(client_model.attributes);

        //Añadimos un nuevo telefono al array de telefonos, posibles, del cliente y mostramos resultado
        //en consola. Llamamos al método definido en el modelo: clientModel.js-->nuevoTelefono().
        client_model.nuevoTelefono('890002233');

        //Añadimos un nuevo telefono al array de telefonos, posibles, del cliente y mostramos resultado
        //en consola.
         client_model.nuevoTelefono('991202233');

         client_model.set({nombre:'Aaron',edad:15});
         //Mostramos los atributos del Modelo creado. A través del método attributes().
         console.log(client_model.attributes);
        
         //Pintamos resultados en el HTML- Notese que aunque no estamos haciendo uso de los archivos clientsCollection.js, contenidoView.js y del template
         //contendioTemplate.html, de esto haremos uso más adelante.
         $('#container').append('<span>'+client_model.get('nombre')+'</span></br><span>'+
         client_model.get('edad')+'</span></br>');


         //Estudio de la clase COLLECTION:
         //Creamos una instancia a la coleccion de Clientes(Clients)
        var clients_collection = new Clients();

        //Añadimos obejtos del tipo Client a la coleccion Clients.
        clients_collection.add([{dni:'111A', nombre:'Javier', edad:25, Profesion:'Analista'},{dni:'2323A', nombre:'Alberto', edad:48, Profesion:'Desarrollador'},{dni:'3333R', nombre:'Manuel', edad:41, Profesion:'Desarrollador'}]);
        



        //Recuperar objetos de la colección
        //Recupera los objetos modelos de la coleccion (Clients)
        console.log('Modelos de la coleccion-->'+clients_collection.models);
        
        //Recuperar objetos de la colección
        // La función at buscará la instancia situada en la posición pasada como parámetro
        console.log(clients_collection.at(0));
        console.log(clients_collection.at(1));
        console.log(clients_collection.at(2));

        //La función get buscará la instancia cuyo id sea el que le pasamos como parámetro
        console.log(clients_collection.get('c2'));

        // filter: itera sobre el array o hash pasando los elementos a una función callback
        // Devuelve un array o hash con los elementos que hayan devuelto 'true' en la función callback
        /*
          _.find (lista, repetidor, [contexto]) Alias: detectar 
          mira a través de cada valor de la lista , devolviendo el primero que pasa una prueba de la verdad ( repetidor ) o indefinido si no hay valor supera la prueba. La función devuelve tan pronto como se encuentra un elemento aceptable y no recorre toda la lista.

          var incluso _.find = ([1, 2, 3, 4, 5, 6], la función (num) {return num% 2 == 0;});
          => 2
        */
        var clients_for_A = _.find(clients_collection.models, function(client){ 
          return client.attributes.nombre = 'Alberto'});
        console.log('Clientes cuyo nombre empieza por A-->' + clients_for_A);

        //Mostramos los datos en la plantilla HTML

        for (var i=0; i <= clients_collection.models.length -1; i++){
          clients_collection.models[i].nuevoTelefono('999999999');
          $('#container').append('<span>'+clients_collection.models[i].get('nombre')+'</span></br><span>'+
          clients_collection.models[i].get('edad')+'</span></br>');
        }
         

    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});