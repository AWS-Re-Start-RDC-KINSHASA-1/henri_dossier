function Recherche(){
    let textbox=document.getElementById("searchbar");
    if(textbox.value==="gestion"==true){
        Resultats();
    } 
    else if(textbox.value==="GESTION"==true){
        Resultats();
    }
    else if(textbox.value==="business"==true){
        Resultats();
    }
    else if(textbox.value==="BUSINESS"==true){
        Resultats();
    }
    else if(textbox.value==="management"==true){
        Resultats();
    }
    else if(textbox.value==="entreprise"==true){
        Resultats();
    }
    else if(textbox.value==="entrepreunariat"==true){
        Resultats();
    }
    else if(textbox.value==="sciences"==true){
        Resultats2();
    }
    else if(textbox.value==="science"==true){
        Resultats2();
    }
    else if(textbox.value==="SCIENCE"==true){
        Resultats2();
    }
    else if(textbox.value==="SCIENCES"==true){
        Resultats2();
    }
    else if(textbox.value==="infographie"==true){
        infographie();
    }
    else if(textbox.value==="design"==true){
        infographie();
    }
    else if(textbox.value==="photoshop"==true){
        infographie();
    }
    else if(textbox.value==="INFOGRAPHIE"==true){
        infographie();
    }
    else if(textbox.value==="DESIGN"==true){
        infographie();
    }
    else if(textbox.value==="PHOTOSHOP"==true){
        infographie();
    }
    else if(textbox.value==="mathématiques"==true){
        Maths();
    }
    else if(textbox.value==="mathematiques"==true){
        Maths();
    }
    else if(textbox.value==="maths"==true){
        Maths();
    }
    else if(textbox.value==="MATHEMATIQUES"==true){
        Maths();
    }
    else if(textbox.value==="MATHS"==true){
        Maths();
    }
    else{
        alert("Requête introuvable!")
    }
}

function Resultats(){
    document.location.hash="gestion"
    document.getElementById("searchbar").innerHTML="+location.hash+";
    }
/*dans cette fonction fischer représente l'Id de la section
la fonction Recherche représente la barre de recherche
la fonction dernier permet de prendre la chaîne de caractère qui se trouve dans la barre de recherche et d'afficher le résultat correspondant */  
function Resultats2(){
    document.location.hash="science"
    document.getElementById("searchbar").innerHTML="+location.hash+";
    }
function infographie(){
    document.location.hash="infographie"
    document.getElementById("searchbar").innerHTML="+location.hash+";
    }
function Maths(){
        document.location.hash="maths"
        document.getElementById("searchbar").innerHTML="+location.hash+";
        }