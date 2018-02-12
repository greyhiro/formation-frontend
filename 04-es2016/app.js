
//partie 1 tp initialisation de donnée avec let
/*
let favoriteCityId ="rome"
console.log(favoriteCityId);
favoriteCityId="paris"
console.log(favoriteCityId);
*/
//constante avec des noms de villes prédéfinit
const citiesId=["paris", "nyc", "rome", "rio-de-janeiro"];

//partie 5 réutilisation de la constante qui predefini des villes
//A l’aide du rest operator, créer à partir du tableau citiesId, 3 constantes : parisId, nycId et othersCitiesId.
//Afficher dans la console la valeur de constante nycId.
//Afficher dans la console la taille du tableau othersCitiesId.
/*
function afficher(value) {
for (var i=0; i< arguments.length; i++) {
return(arguments[i]);
}
}

let [idParis,nycId,  ...othersCitiesId] = citiesId;

console.log("paris= "+idParis);
console.log("New york= "+nycId);
console.log("Autres= "+othersCitiesId);

*/





//partie 2
//on observe ici qu'il nous faut absolument push une nouvelle valeur afin d'utiliser la constante sinon erreur
/*citiesId.push("tokyo");
console.log(citiesId)
*/

//partie 3 retrouner des valeurs simplement en appelant la fonction getWeather
/*
function getWeather(cityId){
let city = cityId.toUpperCase();
let temperature = 20;
return {city:city, temperature:temperature}

}

console.log(getWeather("paris"));
*/

//partie 4 création de constante avec les parametres de fonctions retourné
/*
function getWeather(cityId){
let city = cityId.toUpperCase();
let temperature = 20;
return {city, temperature}

}


const {temperature} = getWeather("rome");
const {city} = getWeather("rome");

console.log(city);
console.log(temperature);
*/


//partie 6 Créer une classe Trip
// params = id,name, imageUrl

/*Ajouter à la classe Trip une méthode statique getDefaultTrip() qui retourne une instance de la
classe Trip valorisée avec les informations suivantes :
◦ id : rio-de-janeiro
◦ name : Rio de Janeiro
◦ imageUrl : img/rio-de-janeiro.jpg
*/
class Trip {
getDefaultTrip(){
return new Trip("rio-de-janeiro","Rio de Janeiro","img/rio-de-janeiro.jpg")
}
  get price(){
return this._price;
}
set price(price) {
this._price = price;
}
constructor(id,name, imageUrl) {

  this.id = id;
  this.name = name;
  this.imageUrl= imageUrl;

}

toString(){
return (this.id + " " + this.name+" "+ this.imageUrl+ " "+trip.price)
}

}


let trip = new Trip("rio", "patate", "url image");
trip.price= 8000000;

console.log(trip.toString())
console.log(trip.getDefaultTrip());
