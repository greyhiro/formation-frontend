/*nantes
paris
saint-nazaire
angers
le mans
*/

var ville=["nantes",
"paris",
"saint-nazaire",
"angers",
"le mans"];

ville.forEach(function(element) {
  console.log(element);


});


function chercherVilleA(uneVilleCourante){

  contiensA= uneVilleCourante.indexOf("a");
  if(contiensA>=0)
  {

    return true


  } else {
    return false}
}
contiensA = ville.every(chercherVilleA);
if(contiensA==true)
{
  console.log("toutes les villes contiennent la lettre a")
}else {
  {
    console.log("toutes les villes ne contiennent pas la lettre a")
  }
}

function contiensUnTrait(uneVilleCourante){

  contiens= uneVilleCourante.indexOf("-");
  if(contiens>=0)
  {

    return true


  } else {
    return false}
}




function filterTiretEspace(uneVilleCourante){

  contiens= uneVilleCourante.indexOf("-");
  contiensespace = uneVilleCourante.indexOf(" ");
  if((contiens<=0)&&(contiensespace<=0))
  {

    return true


  } else {
    return false}
}



var sansTiretNiEspace = ville.filter(filterTiretEspace);

console.log("ville sans tiret ni espaces => "+sansTiretNiEspace);

//filter()
