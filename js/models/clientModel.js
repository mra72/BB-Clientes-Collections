define([
  'underscore',
  'backbone'
], function(_, Backbone){
 var Client = Backbone.Model.extend({
     
     defaults: {
        empresa: 'Unknow',
        telefonos: []
    },

    idAttribute: 'dni',//Declaramos que el atributo DNI va a ser el ID de cada uno de los modelos de la coleccion.

    initialize: function(attrs, opts){  
     //Métodos de escucha de eventos
       //vamos a definir una función que se dispare cuando instanciamos el modelo(dentro de initialize) 
       //que va a alertar de los cambios en los atributos que se desee.
        this.on("invalid", function(model, error){
          // recibimos el error y lo alertamos...
          alert(model.get("edad")+" "+error );
        });

        this.on("change:nombre", function(model){
                  var new_client = model.get("nombre"); 
                  alert("El nombre ha cambiado a " + new_client );
        });
     //------------------------------
    
    },

    //Podemos incluir nuestras propias funciones de manipulación a la hora de definir nuestro modelo:
    //Para este ejemplo vamos a definir la siguiente: nuevoTelefono()
    nuevoTelefono: function(n_tel){
       //this porque estamos dentro del propio entorno de declaracion(scope) del objeto
        var telefonos_array = this.get("telefonos");
        //Agregamos el numero de telefono al array de telefonos, inicialmente VACIO
        telefonos_array.push(n_tel);
        //Seteamos al atributo 'telefonos' del objeto dicho array modificado
        this.set({telefonos: telefonos_array });
    },
    //----------------------------------------------------------------------------------------------

    //Funcion de validación
    validate: function(attrs){
        if (attrs.edad < 18){
            return "Demasiado joven para ser cliente";
        }
    }

  });

  return Client;
});