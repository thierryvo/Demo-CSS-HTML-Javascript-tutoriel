// ==========================================================================================================
// test2  (tuto css)
// ==========================================================================================================
// dossier: C:\WORK\NODEJS\tutocss\test2
// fichier: app.js
// tuto chaine : https://www.youtube.com/watch?v=pi-jnnNFTiQ
// test        :  node app.js
//                npm run dev          => lance nodemon, en Utilisant les scripts de package.json ***
// DESCRIPTION :  http://localhost:3030/demo-test2/user/
//
// installation: npm install express dotenv ejs
//               
//               npm install express-session connect-flash express-fileupload cookie-parser
//               npm install express-ejs-layouts express-fileupload method-override
//                

//               npm install nodemon --save-dev                                                                                                
// ==========================================================================================================
// import des modules nécessaires
const express = require('express')
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const fileUpload = require('express-fileupload');
require('dotenv').config({path: './serveur/config/.env'})

/*****************************************/
/* Initialisation de l'API (du serveur)  */
const appServeur = express();

/*****************************************/
/* Mise en place du paramétrage          */
  appServeur.use(express.json());
  appServeur.use(methodOverride('_method'));
  appServeur.use(express.urlencoded({ extended: true }));
  appServeur.use(express.static('public'));                   // static Files
  appServeur.use(cookieParser('DemoTest2rSecure'));           // DemoUser ... Secure
  appServeur.use(session({
    secret: 'DemoTest2SecretSession',                         // DemoUser ... SecretSession
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    }    
  }));
  appServeur.use(flash({ sessionKeyName: 'flashMessage' }));
  appServeur.use(fileUpload());
  // Moteur de création de modèles (templating Engine)
  appServeur.use(expressLayouts);
  appServeur.set('layout', './layouts/main');                 // layouts
  appServeur.set("view engine", "ejs")

/*****************************************/
/* Mise en place du routage              */
appServeur.get('/', (req, res) => res.send(`Je suis en ligne (DEMO-test2). Tout est OK pour l'instant."`));
// user: '/demo-user/user'
const urlprefixe_appli = process.env.URL_PREFIXE_APPLI;
const urlprefixe_user  = process.env.URL_PREFIXE_USER;
const url_user = urlprefixe_appli + urlprefixe_user;



console.log(url_user);

const userRoutes = require('./serveur/routes/user-routes.js');
appServeur.use(url_user, userRoutes);
//
// 404
appServeur.get('*', (req, res) => {
  // non trouvé
  const urlIndex = urlprefixe_appli + urlprefixe_user     + "/"                   // "/demo-test2/user/"
  const urlRecherche = urlprefixe_appli + urlprefixe_user + "/user-recherche"     // "/demo-test2/user/user-recherche"
  const urlabout = urlprefixe_appli + urlprefixe_user     + "/about"              // "/demo-test2/user/about"
  res.status(404).render('PAGE404', {urlIndex, urlRecherche, urlabout});  // 404 NON Trouvé
  //res.status(501).send("Qu'est-ce que tu fais bon sang de bois!?!"); // 501 ressource non implémenté
});

/******************************************************************/
/* Démarrer la connexion BASE DE DONNEES    (MongoDB Atlas)       */
// pas ici: Voir dans le contrôleur par sql

/******************************************************************/
/* Démarrer le serveur: sur port 3000                             */
const port = process.env.PORT; // 3000;
const serveurnom = process.env.SERVEUR_NOM; // DEMO-USER
appServeur.listen(port, () => {
    console.log("SERVEUR: " + serveurnom + ", demarré sur:   http://localhost:"+port);
});