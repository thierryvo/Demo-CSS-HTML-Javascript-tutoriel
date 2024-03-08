// javascript pour le test 02
// tuto: https://www.youtube.com/watch?v=sBZKDgHrOyc



// ===========================================
// mafonction -- fonction de test
// ===========================================
exports.mafonction = function (data) {
    return "mon retour de fonction..." + 
           ", etat=" + data.etat +
           ", visible=" + data.visible + 
           ", couleur="+data.couleur;
}


// ===========================================
// definirMesBox -- fonction de test
// ===========================================
exports.definirMesBox = function (data) {    
    // => document n est pas accécible ça ne fonctionne pas !!!!!!!!!!!!!!!!!!
    //
    // Accéder aux variables css
    document.documentElement.style.setProperty('--main-color', data.maincolor);
    document.documentElement.style.setProperty('--shad-color', data.shadcolor);  
}