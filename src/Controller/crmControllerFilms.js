const mongoose = require('mongoose');
const FilmsSchema = require('../Model/crmModelFilm');

// Création du model Film
const Film = mongoose.model('Film', FilmsSchema.objFilms);

//export de la méthode d'ajout
exports.addNewFilm = (req, res) => {

    const newFilm = new Film( req.body );
    console.log(req.body);
    newFilm.save((err, film) => {
        if(err) res.send(err);
        res.json(film);
        console.log('function addNewFilm  return: ', film);
    });
};
// export de la méthode de liste
exports.getFilms = (req, res) => {

    Film.find({}, (err, film) => {
        if(err) res.send(err);
        res.json(film);
        console.log('function getFilms from controllers return: ', film);
    });
};

// export de la méthode d'un film par son id
exports.getFilmById = (req, res) => {
    Film.findById( req.params.filmId, (err, film) => {
        if(err) res.send(err);
        res.json(film);
        console.log('function getfilmById from  return: ', film );
    });
};


// export de la méthode de modif d'un film par son Id
exports.updateFilm = (req, res) => {
    Film.findOneAndUpdate({_id: req.params.filmId }, req.body, {new : true}, (err, film) => {
        if(err) res.send(err);
        res.json(film);
        console.log('function updatefilm f return: ', film +'modified with Id : '+ req.params.filmId);
    });
};

// export de la méthode de supression d'un film par son Id
exports.deleteFilm = (req, res) => {

    Film.deleteOne({_id: req.params.filmId }, (err, film) => {
        if(err) res.send(err);
        res.json(film);
        console.log('function deletefilm  ', film +'delete on Id : '+ req.params.filmId);
    });
};