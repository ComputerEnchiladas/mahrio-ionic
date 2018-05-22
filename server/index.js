process.env.NODE_URL='127.0.0.1';
process.env.NODE_ENV='development';

require('mahrio').runServer( process.env, __dirname )
  .then( function( server ){

    server.route({
      method: 'POST',
      path: '/api/switch',
      handler: function(req, rep){
        console.log( req.payload.switch );
        rep('OK');
      }
    });

  });
