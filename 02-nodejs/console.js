const readline = require('readline');
var testService = require('./service');



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("***Application de conference***");
console.log("1-> lister les presentateur");
console.log("2-> lister par session");
console.log("3-> lister Top presentateur");
console.log("4-> lister detail sessions");

rl.question('Choisissez votre menu', (answer) => {

  //var testSessionWithID= testService.findSessionWithID(`${answer}`);
  if(`${answer}`==1)
  {

    var testPresentateur = testService.ListerPres();
    testPresentateur.filter(function(element){
    console.log("nom : " +element.firstname + " prenom: " +element.lastname );

rl.close;

  });
}

if(`${answer}`==2)
{
  rl.question('Enter an id of session', (answer) => {

  var testSessionWithID= testService.findSessionWithID(`${answer}`);
  console.log(testSessionWithID.id +" "+ testSessionWithID.title);


  });
}

if(`${answer}`==3)
{

  var testTopPres = testService.ListerTopPres();
  testTopPres.filter(function(element){
  console.log("nom : " +element.firstname + " prenom: " +element.lastname );


});
  }

  if(`${answer}`==4)
  {
    rl.question('Enter an id of session', (answer) => {

    var testSessionWithID= testService.findSessionWithID(`${answer}`);
  console.log("id session : " +testSessionWithID.id);
  console.log(" titre: " +testSessionWithID.title);
    console.log(" confRoom: " +testSessionWithID.confRoom);
      console.log(" type: " +testSessionWithID.type);
        console.log(" difficulty: " +testSessionWithID.difficulty);
        if(testSessionWithID.all!=null){
              console.log(" all: " +testSessionWithID.all);}
              if(testSessionWithID.lang!=null){
                    console.log(" lang: " +testSessionWithID.lang);}
                    if(testSessionWithID.hour!=null){
                          console.log(" hour: " +testSessionWithID.hour);
                        }
                          if(testSessionWithID.video!=null)
                          {
                                console.log(" video: " +testSessionWithID.video);
                              }
  rl.close;
    });
  }



});
