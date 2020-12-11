const mongoose = require('mongoose');
//Model pour la création d'un schéma pour les films 
const Schema = mongoose.Schema;
exports.objFilms = new Schema({
    idContact:{
        type:String
    },
    titre:{
        type: String,
        required: 'Entrer le nom du films'
    },
    pays: {
        type: String,
        required:'Entrer le pays du films'
    },
    années:{
        type: Number
    },
    note:{
        type:String
    },
    commentaire:{
        type:String
    },
    
});