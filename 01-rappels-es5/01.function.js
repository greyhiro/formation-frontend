console.log("01 - Fonctions");

var nombre1 =10;
var nombre2 =20;

 function additionner(nombre1, nombre2){
var addition = nombre1+nombre2;
return addition;
}

var resultat1= additionner(nombre1,nombre2);
console.log("resultat=" +resultat1);

function somme()
{
  var nombre1=10;
  var nombre2=20;

  return nombre1+nombre2;

}


function mutli(nombre1, nombre2){
var multiplication = nombre1*nombre2;
return multiplication;
}


var resultat2 = somme();
console.log("resultat2="+resultat2);

var multiplication = mutli(nombre1, nombre2);

console.log("resultatMulti="+multiplication);

var operation = {

nomSomme:"Somme",
nomMulti:"multiplication",
nomSoustraction:"Soustraction",
nb1:20,
nb2:40,

//operation de type Fonction qui représente la fonction à exécuter.
}

function calculerOp(nb1,nb2){

var calcul = nb1+nb2;
return calcul;

}
function soustraire(nb1,nb2){
var calcul = nb1-nb2;
return calcul;

}

var afficherOpperation = operation.nomSomme +" "+ operation.nb1+ " + "+ operation.nb2 + " resultat= "+ calculerOp(operation.nb1, operation.nb2);
var afficherOpperationmulti =operation.nomMulti +" "+ operation.nb1+ " x "+ operation.nb2 + " resultat= "+ mutli(operation.nb1, operation.nb2);
var afficherOpperationSous =operation.nomSoustraction +" "+ operation.nb1+ " - "+ operation.nb2 + " resultat= "+ soustraire(operation.nb1, operation.nb2);

console.log(afficherOpperation);
console.log(afficherOpperationmulti);
console.log(afficherOpperationSous);
