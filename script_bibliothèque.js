function Recherche(){
    let textbox=document.getElementById("searchbar");
    if(textbox.value==="fischer"==true){
        Resultats();
    } 
    else if(textbox.value==="FISCHER"==true){
        Resultats();
    }
    else if(textbox.value==="programmation"==true){
        Resultats();
    }
    else if(textbox.value==="php"==true){
        Resultats();
    }
    else if(textbox.value==="RH"==true){
        Resultats2();
    }
    else if(textbox.value==="ressources humaines"==true){
        Resultats2();
    }
    else if(textbox.value==="ressources"==true){
        Resultats2();
    }
    else if(textbox.value==="rh"==true){
        Resultats2();
    }
    else{
        alert("Requête introuvable!")
    }
}

function Resultats(){
    document.location.hash="fischer"
    document.getElementById("searchbar").innerHTML="+location.hash+";
    }
/*dans cette fonction fischer représente l'Id de la section
la fonction Recherche représente la barre de recherche
la fonction dernier permet de prendre la chaîne de caractère qui se trouve dans la barre de recherche et d'afficher le résultat correspondant */  
function Resultats2(){
    document.location.hash="RH"
    document.getElementById("searchbar").innerHTML="+location.hash+";
    }