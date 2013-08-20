// Require.js nos permite configurar alias de acceso directo
// Su uso se hará más evidente más adelante en el tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-1.9.1',
    underscore: 'libs/underscore/underscore',
    text:'libs/require/text',
    domReady:'libs/require/domReady',
    backbone: 'libs/backbone/backbone-min',
    i18n:'i18n'
    },
    shim: {
      underscore: {
        exports: '_'
      } ,
      
      backbone: {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
      }
    }

});

require([
         'jquery',
         'app',

       ], function($,App){
	 	 
         $(function () {
        	     
               window.App=App;//Variable en el scope global App(window.App)
               App.initialize();
           });
       });
