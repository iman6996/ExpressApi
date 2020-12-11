//Import des controllers 
const controllers = require ('../Controller/crmControllers')


// Création d'une route contacts 
const routes =(app) =>{
    app.route('/contacts')
    .get((req,res,next) =>{
        console.log ('Method from ' + req.originalUrl);
        next();  
    }, controllers.getContacts)

// POST pour créer des contatcts 
    .post(controllers.addNewContact);

    app.route('/contact/:contactId')
    // je retourne 1 contacte  
    .get( controllers.getContactByID)
    .put (controllers.updateContact)
    .delete ( controllers.deleteContact)
}
// Permet d'activer les routes construites 
exports.routes = routes