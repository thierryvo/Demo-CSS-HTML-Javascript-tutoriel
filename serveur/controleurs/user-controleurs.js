// ==========================================================================================================
// DEMO-SEQ  (CRUD avec EJS layout & SEQUELIZE mysql2) NodeJS Express                   http://localhost:3000
// ==========================================================================================================
// dossier: C:\WORK\NODEJS\DEMO-SEQ
// fichier: serveur/routes/client-controleurs.js          
// doc: https://sebhastian.com/tags/sequelize/
//      https://sebhastian.com/sequelize-findone/                                                                                     
// ==========================================================================================================
// import des modules necessaire

// GLOBAL:
const urlprefixe_appli = process.env.URL_PREFIXE_APPLI;
const urlprefixe_user  = process.env.URL_PREFIXE_USER;
const urlIndex = urlprefixe_appli + urlprefixe_user     + '/'               // "/demo-seq/user/"
const urlRecherche = urlprefixe_appli + urlprefixe_user + '/user-recherche' // "/demo-seq/user/user-recherche"
const urlabout = urlprefixe_appli + urlprefixe_user     + '/about'          // "/demo-seq/user/about"



// https://github.com/lukmanharun1/person/blob/master/controller/person.js
/*****************************************/
// GET  homepage 
exports.homepage = async (req, res) => {
  // récupération des messages flash ()
  const tabDesMessages = req.flash('info');
  const tabMenuDynamique = [
    {nom: 'lientest1', urlmenu: urlprefixe_appli + urlprefixe_user +'/lientest1'},
    {nom: 'lientest2', urlmenu: urlprefixe_appli + urlprefixe_user +'/lientest2'},
    {nom: 'introhtml5', urlmenu: urlprefixe_appli + urlprefixe_user +'/introhtml5'},
    {nom: 'courscss', urlmenu: urlprefixe_appli + urlprefixe_user +'/courscss'},
    {nom: 'legrid', urlmenu: urlprefixe_appli + urlprefixe_user +'/legrid'},
    {nom: 'basesjs', urlmenu: urlprefixe_appli + urlprefixe_user +'/basejs'},
    {nom: 'calculatricejs', urlmenu: urlprefixe_appli + urlprefixe_user +'/calculatricejs'},
    {nom: 'ledom', urlmenu: urlprefixe_appli + urlprefixe_user +'/ledom'},
    {nom: 'testgriddrag', urlmenu: urlprefixe_appli + urlprefixe_user +'/testgriddrag'}
  ];
  //
  // donnees à passer au javascript: (va transiter par oTemplateData)
  const dataControle = {
    etat: 'ok',
    visible: 'true',
    couleur: 'red'
  }
  const dataCssControle = {
    largeur: '100px',
    hauteur: '10px',
    margin: '10px',
    bgc: 'blue'
  }  
  //
  // helper = assitant javascript avec fonctions javascript
  const helper = require("../../public/js/helper");
  try {
    const tabUsers = [{}];
    //
    // RENDRE la PAGE: index.ejs
    const oTemplateData = {
      titre: "Accueil ",
      description: "Demo test2",
      urlIndex: urlIndex,
      urlabout: urlabout,
      urlRecherche: urlRecherche,
      tabDesMessages: tabDesMessages,
      tabMenuDynamique: tabMenuDynamique,
      tabUsers: tabUsers,
      dataControle: dataControle,
      dataCssControle: dataCssControle,
      helper: helper
    }
    res.status(200).render("index", oTemplateData);
  } catch (error) {
    console.log(error);
  }
};

/*****************************************/
// GET  test1
exports.lientest1 = async (req, res) => {
  try {
    //
    // RENDRE la PAGE: about
    const oTemplateData = {
      titre: "test 1",
      description: "Demo SQL SEQUELIZE mysql2 avec ejs layout table users",
      urlIndex: urlIndex,
      urlabout: urlabout,
      urlRecherche: urlRecherche,
    }
    res.status(200).render("test1", oTemplateData);
  } catch (error) {
    console.log(error);
  }
};

/*****************************************/
// GET  test2
exports.lientest2 = async (req, res) => {
  try {
    //
    // RENDRE la PAGE: about
    const oTemplateData = {
      titre: "test 2",
      description: "Demo SQL SEQUELIZE mysql2 avec ejs layout table users",
      urlIndex: urlIndex,
      urlabout: urlabout,
      urlRecherche: urlRecherche,
    }
    res.status(200).render("test2", oTemplateData);
  } catch (error) {
    console.log(error);
  }
};

/*****************************************/
// GET  introhtml5
exports.introhtml5 = async (req, res) => {
  try {
    const tabUsers = [
      {nom: 'VOZELLE', prenom: 'Thierry', id: 1},
      {nom: 'COESENS', prenom: 'Dounia', id: 2},
      {nom: 'Steinfeld', prenom: 'Hailee ', id: 3},
    ];
    //
    // RENDRE la PAGE: about
    const oTemplateData = {
      titre: "cour tuto html5",
      description: "Demo html5",
      urlIndex: urlIndex,
      urlabout: urlabout,
      urlRecherche: urlRecherche,
      tabUsers: tabUsers
    }
    res.status(200).render("introhtml5", oTemplateData);
  } catch (error) {
    console.log(error);
  }
};

/*****************************************/
// GET  courscss
exports.courscss = async (req, res) => {
  try {
    const tabUsers = [
      {nom: 'VOZELLE', prenom: 'Thierry', id: 1},
      {nom: 'COESENS', prenom: 'Dounia', id: 2},
      {nom: 'Steinfeld', prenom: 'Hailee ', id: 3},
    ];
    //
    // RENDRE la PAGE: about
    const oTemplateData = {
      titre: "cour tuto css",
      description: "Demo css",
      urlIndex: urlIndex,
      urlabout: urlabout,
      urlRecherche: urlRecherche,
      tabUsers: tabUsers
    }
    res.status(200).render("courscss", oTemplateData);
  } catch (error) {
    console.log(error);
  }
};

/*****************************************/
// GET  legrid
exports.legrid = async (req, res) => {
  try {
    const tabUsers = [
      {nom: 'VOZELLE', prenom: 'Thierry', id: 1},
      {nom: 'COESENS', prenom: 'Dounia', id: 2},
      {nom: 'Steinfeld', prenom: 'Hailee ', id: 3},
    ];
    //
    // RENDRE la PAGE: about
    const oTemplateData = {
      titre: "cour tuto css GRID",
      description: "Demo css grid",
      urlIndex: urlIndex,
      urlabout: urlabout,
      urlRecherche: urlRecherche,
      tabUsers: tabUsers
    }
    res.status(200).render("coursgrid", oTemplateData);
  } catch (error) {
    console.log(error);
  }
};

/*****************************************/
// GET  basejs
exports.basejs = async (req, res) => {
  try {
    const tabUsers = [
      {nom: 'VOZELLE', prenom: 'Thierry', id: 1},
      {nom: 'COESENS', prenom: 'Dounia', id: 2},
      {nom: 'Steinfeld', prenom: 'Hailee ', id: 3},
    ];
    //
    // RENDRE la PAGE: about
    const oTemplateData = {
      titre: "cour tuto les bases javascript",
      description: "Demo javascript",
      urlIndex: urlIndex,
      urlabout: urlabout,
      urlRecherche: urlRecherche,
      tabUsers: tabUsers
    }
    res.status(200).render("basejs", oTemplateData);
  } catch (error) {
    console.log(error);
  }
};

/*****************************************/
// GET  calculatricejs
exports.calculatricejs = async (req, res) => {
  try {
    const tabUsers = [
      {nom: 'VOZELLE', prenom: 'Thierry', id: 1},
      {nom: 'COESENS', prenom: 'Dounia', id: 2},
      {nom: 'Steinfeld', prenom: 'Hailee ', id: 3},
    ];
    //
    // RENDRE la PAGE: about
    const oTemplateData = {
      titre: "cour tuto calculatrice en javascript",
      description: "Demo javascript",
      urlIndex: urlIndex,
      urlabout: urlabout,
      urlRecherche: urlRecherche,
      tabUsers: tabUsers
    }
    res.status(200).render("calculatricejs", oTemplateData);
  } catch (error) {
    console.log(error);
  }
};

/*****************************************/
// GET  ledom
exports.ledom = async (req, res) => {
  try {
    const tabUsers = [
      {nom: 'VOZELLE', prenom: 'Thierry', id: 1},
      {nom: 'COESENS', prenom: 'Dounia', id: 2},
      {nom: 'Steinfeld', prenom: 'Hailee ', id: 3},
    ];
    //
    // RENDRE la PAGE: about
    const oTemplateData = {
      titre: "cour tuto le DOM en javascript",
      description: "Demo javascript",
      urlIndex: urlIndex,
      urlabout: urlabout,
      urlRecherche: urlRecherche,
      tabUsers: tabUsers
    }
    res.status(200).render("ledom", oTemplateData);
  } catch (error) {
    console.log(error);
  }
};

/*****************************************/
// GET  testgriddrag & drop
exports.testgriddrag = async (req, res) => {
  try {
    const tabUsers = [
      {nom: 'VOZELLE', prenom: 'Thierry', id: 1},
      {nom: 'COESENS', prenom: 'Dounia', id: 2},
      {nom: 'Steinfeld', prenom: 'Hailee ', id: 3},
    ];
    //
    // RENDRE la PAGE: about
    const oTemplateData = {
      titre: "cour recuperation grid drag and drop",
      description: "Demo grid gantt",
      urlIndex: urlIndex,
      urlabout: urlabout,
      urlRecherche: urlRecherche,
      tabUsers: tabUsers
    }
    res.status(200).render("test-grid-drag-drop", oTemplateData);
  } catch (error) {
    console.log(error);
  }
};