define(['text!views/templates/index.html'], function (Index){

    console.log('Todas las librerías cargadas y listas.');

    $('div#main-container').html(_.template(Index, {app_name: 'Interactive'}));


    var Usuario = Backbone.Model.extend({
        initialize: function(){
            console.log('Usuario creado.');
        }
    });

    var Usuarios = Backbone.Collection.extend({
        model: Usuario,
        backend: 'usuarios',
        initialize: function() {
            this.bindBackend();
        }
    });

    var Nota = Backbone.Model.extend({
        initialize: function(){
            console.log('Nota creada.');
        }
    });

    var Notas = Backbone.Collection.extend({
        model: Nota,
        backend: 'notas',
        initialize: function() {
            this.bindBackend();
        }
    });

    var users = new Usuarios;

    var notes = new Notas;

    notes.fetch();

    users.fetch();

    var yo = users.create({ nombre: 'mathias', contrasenia: '******'});

    var note = notes.create({ averquedice: 'como va la cosa?'});

});
