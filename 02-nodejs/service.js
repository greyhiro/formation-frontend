var devfest = require("devfest-2015");




function presentateur(){

  var pres =devfest.speakers;

  return pres;
}


function session(){

  var sess = devfest.sessions;

  return sess;

}




function findSessionById(id_session){

  return devfest.sessions.find(function(element){

    return element.id==id_session;

});
}


function listerTopPresentateurs(){
  return devfest.speakers.filter(function(element){

    return element.topspeaker === true;

});

}



exports.ListerSession = session;
exports.ListerPres = presentateur;
exports.ListerTopPres = listerTopPresentateurs;
exports.findSessionWithID =findSessionById;
