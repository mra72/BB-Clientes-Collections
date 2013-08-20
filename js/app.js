// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router){
  var initialize = function(){
    // Pase a nuestro módulo de router y llame a su función initialize
    Router.initialize();
  };

  return {
    initialize: initialize
  };
});