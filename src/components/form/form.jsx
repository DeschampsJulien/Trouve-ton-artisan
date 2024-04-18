import React, { useState } from 'react';

import Felicitation from "../../assets/pictures/felicitation.jpg";

import "./form.scss";

function Formulaire() {  

    // États pour stocker le texte et la valeur du champ de formulaire
    const [text, setText] = useState('');
    // const [alert, setAlert] = useState(false);
    const [showForm, setShowForm] = useState(true);

    // Fonction pour mettre à jour le texte au clic, si le formulaire est rempli
    function handleClick () {
        const champNom = document.getElementById("textNom");
        const champEmail = document.getElementById("textEmail");
        const champNumero = document.getElementById("textNumero");
        const champSujet = document.getElementById("textSujet");
        const champMessage = document.getElementById("textMessage");

        // vérification des valeurs des champs du formulaire
        const values = (champNom.value.trim() && champEmail.value.trim() && champNumero.value.trim() && champSujet.value.trim() && champMessage.value.trim() !== '');
        
        // Création de la zone d'information
        // if (values) {
        //     setAlert (
        //         <p classname="alert alert-info" role="alert">Vôtre message est en cours de traitement</p>
        //     );
        // }
        
        // Création de la zone de félicitation retardée
        return new Promise (() => {
            setTimeout(() => {

                if (values) {
                        
                    setText(
                        <div className="container">
                            <p className="text-center fs-2 m-5">Félicitation</p>
                            <img src={Felicitation} width="220" alt="logo de félicitation" className="felicitation"/>
                            <p className="text-center fs-4 m-5">Vôtre message est bien envoyé à l'artisan</p>
                        </div>
                    );
                    
                    // Mettre à jour l'état pour cacher le formulaire
                    setShowForm(false); 
                }
            },1000); 
        });       
    }

    return (
        <form className="col-lg-6 col-md-6">
            {showForm && (
                <div className="form-group m-3">
                    <input type="Nom" id="textNom" className="form-control my-3" placeholder="Vôtre nom" required autoComplete="off" />
                    <input type="mail" id="textEmail" className="form-control my-3" placeholder="Vôtre adresse email" required autoComplete="off" />
                    <input type="Numéro" id="textNumero" className="form-control my-3" placeholder="Vôtre numéro de téléphone" required autoComplete="off" />
                    <input type="Sujet" id="textSujet" className="form-control my-3" placeholder="Sujet" required autoComplete="off" />
                    <textarea type="message" id="textMessage" className="form-control my-3" placeholder="Vôtre message" rows="4" required /> 
                    <button onClick={handleClick} type="submit" className="btn btn-primary btn-lg my-2">Envoyer</button>
                </div>
            )}
                <div className="text-center m-5">{text}</div>
        </form>  
    );
}

export default Formulaire;
