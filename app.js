const express = require('express');
const mongoose = require('mongoose');
// Chargement des route de notre dossier 
const router = require('./src/Routes/crmRoutes');
const bodyParser = require ('body-parser');

// Connexion au port 3000 pour express
const app = express();
const port = 3000;

//Connexion à la base de donnéés
mongoose.set('useUnifiedTopology', true )
mongoose.connect('mongodb+srv://iman:labelle69@cluster0.hbwaw.mongodb.net/CRM_DB?retryWrites=true&w=majority',{useNewUrlParser: true },()=>{
    console.log('Bien connectés à MongoDB')
})
// body parser json 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());


app.use(express.static('public'));
const message = 'Express is running in port ' + port

//Chargement des routes 
router.routes(app)

//gestion app express
app.get('/', (req, res) => res.send(message))
app.listen(port, () => console.log(message))