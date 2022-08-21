// Code your solution here
// const drivers =  ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers,name){
    return drivers.filter( input=>(
      input.toLowerCase() === name.toLowerCase()
    ));
}

function fuzzyMatch(drivers,name){
return drivers.filter(input =>(
  input.slice(0,name.length)=== name
));
}

function matchName(drivers,name){
  return drivers.filter(input =>(
    input.name === name
  ));
}
