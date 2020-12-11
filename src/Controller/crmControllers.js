const mongoose = require ('mongoose');
const ContactSchema = require('../Model/crmModels'); 

// Création du model Contact 
const Contact = mongoose.model('Contact',ContactSchema.obj);

// export de la methode d'ajout 
exports.addNewContact = (req ,res) =>{
const newContact = new Contact (req.body);

// enregistre le contact créer
newContact.save((err ,contact ) =>{
    if (err) res.send(err);
    res.json(contact);
    console.log('function addnew return' + contact);

}); 
}
//exporter la liste des contacts 
exports.getContacts = (req ,res) =>{
    
    
    // enregistre le contact créer
    Contact.find( {}, (err ,contact ) =>{
        if (err) res.send(err);
        res.json(contact);
        console.log('function getContact return' + contact);
    
    }); 
    }

    //trouver contact par id
    exports.getContactByID = (req ,res) =>{
            Contact.findById( req.params.contactId, (err ,contact ) =>{
            if (err) res.send(err);
            res.json(contact);
            console.log('function getContact return' + contact + 'with Id' + req.params.contactId);
        
        }); 
        }

        //modif un contact
        exports.updateContact = (req ,res) =>{
    
            Contact.findOneAndUpdate( { _id: req.params.contactId},req.body,{new :true}, (err ,contact ) =>{
                if (err) res.send(err);
                res.json(contact);
                console.log('function update return' + contact + 'modified with Id' + req.params.contactId);
            
            }); 
            }

            exports.deleteContact = (req ,res) =>{
    
                Contact.findByIdAndDelete( { _id: req.params.contactId}, (err ,contact ) =>{
                    if (err) res.send(err);
                    res.json(contact);
                    console.log('bien delete');
                
                }); 
                }