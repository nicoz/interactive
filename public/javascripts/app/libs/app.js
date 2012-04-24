define(['text!views/templates/index.html'], function (Index){

  console.log('Todas las librerías cargadas y listas.');

  $('div#main-container').html(_.template(Index, {app_name: 'Interactive'}));

});
