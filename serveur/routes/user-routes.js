// ==========================================================================================================
// DEMO-SEQ  (CRUD avec EJS layout & SEQUELIZE mysql2) NodeJS Express                   http://localhost:3000
// ==========================================================================================================
// dossier: C:\WORK\NODEJS\DEMO-SEQ
// fichier: serveur/routes/user-routes.js                                                                                               
// ==========================================================================================================
// import des modules necessaire
const userControleur = require('../controleurs/user-controleurs');

/*************************************************/
/*** Récupération du routeur d'express           */
const routeur = require('express').Router();

/*************************************************/
/*** Routage de la ressource User                */
routeur.get('/', userControleur.homepage);
//
//
routeur.get('/lientest1', userControleur.lientest1);
routeur.get('/lientest2', userControleur.lientest2);
routeur.get('/introhtml5', userControleur.introhtml5);
routeur.get('/courscss', userControleur.courscss);
routeur.get('/legrid', userControleur.legrid);
routeur.get('/basejs', userControleur.basejs);
routeur.get('/calculatricejs', userControleur.calculatricejs);
routeur.get('/ledom', userControleur.ledom);
routeur.get('/testgriddrag', userControleur.testgriddrag);


// 
module.exports = routeur;
