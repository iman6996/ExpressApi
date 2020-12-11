//Import des controllers 
const controllers = require ('../Controller/crmControllers');
const controllersFilm = require ('../Controller/crmControllerFilms');


// Création d'une route contacts 
const routes =(app) =>{
    app.route('/contacts')
    .get((req,res,next) =>{
        console.log ('Method from ' + req.originalUrl);
        next();  
    }, controllers.getContacts)

// POST pour créer des contacts 
    .post(controllers.addNewContact);

    app.route('/contact/:contactId')
    // je retourne 1 contact 
    .get( controllers.getContactByID)
    //PUT  pour modifier des contacts 
    .put (controllers.updateContact)
    // DELETE pour supprimer des contacts 
    .delete ( controllers.deleteContact)


// Création de ma route pour les films
//routes pour films
app.route('/films')
.get( (req, res, next) =>{
    console.log('method get from ' + req.originalUrl);
    console.log('method ? ' + req.method);
    next();
}, controllersFilm.getFilms)
 // post pour créer un nouveau contact
.post( controllersFilm.addNewFilm );



//route de gestion d'un film
app.route('/film/:filmId')
// retourne un seul film par son Id
.get(controllersFilm.getFilmById)

// put pour modifier un film
.put(controllersFilm.updateFilm)

// delete pour effacer un film
.delete(controllersFilm.deleteFilm);

}; 

// Permet d'activer les routes construites 
exports.routes = routes