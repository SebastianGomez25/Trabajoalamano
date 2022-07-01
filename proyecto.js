'use strict'
var Project = require('../models/project');
var controller={

home: function(req, res) {
      return res.status(200).send({ message: "soy la home"
});
},

test: function(req, res) { 
      return res.status(200).send({ message: "metodo test"
});
},

// agregar un proyecto

saveProject: function(req, res) {
     var project = new Project();

     var params = req.body;

project.name =params.name;
project.description =params.description;
project.category= params.category;
project.langs =params.langs;
project.year =params.year;
project.image= null;

project.save((err, projectStored) => {
if (err) return res.status(500).send({message: "error al guardar documento"});
if(!projectStored) return res.status(404).send({message: "no se pudo guardar el documento"});
return res.status (200).send({project: projectStored});

});

},
}

module.exports=controller;