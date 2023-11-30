//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon)
{
  var Manager=[managerName,managerAge,currentTeam,trophiesWon]
  return Manager;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (formation.length === 0) {
    return null;
  }

  const defaultFormation = { defender: undefined, midfield: undefined, forward: undefined };

  return {
    ...defaultFormation,
    ...(formation.length >= 1 && { defender: formation[0] }),
    ...(formation.length >= 2 && { midfield: formation[1] }),
    ...(formation.length >= 3 && { forward: formation[2] }),
  };
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var data=players.filter(player=>player.debut==year);
  return data;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  let player_position = [ ]
  for (let i=0 ; i<players.length ; i++){
    if (players[i].position == position){
      player_position.push(players[i])
    }
  }
  return player_position
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(award){
  let player_award = [ ]
  for (let i=0 ; i<players.length ; i++){
    for(let j=0 ; j<players[i].awards.length ; j++){
      if (award == players[i].awards[j].name){
        player_award.push(players[i])
      }
    }
  }
  if (award == undefined){
    player_award= [ ]
  }
  return player_award
}

//Progression 6 - Filter players that won ______ award ____ timesfunction filterByAwardxTimes(award,t){
  function filterByAwardxTimes(award,t){
    let player_award_time = [ ]
    
    for (let i=0 ; i<players.length ; i++){
      let award_count = 0
      for(let j=0 ; j<players[i].awards.length ; j++){
        if (award == players[i].awards[j].name){
          award_count++
        }
      }
      for(let z=0 ; z<players[i].awards.length ; z++){
        if (award == players[i].awards[z].name && award_count == t){
          player_award_time.push(players[i])
          break
        }
      }
    }
    return player_award_time
  }
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName,country){
  var awardsData=filterByAward(awardName);
  var data=awardsData.filter(player=>player.country==country);
  return data;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noaward,team,age){
  var ans = [ ]
  console.log(noaward,team,age)
  for (let i=0 ; i<players.length ; i++){
    if (players[i].age < age && players[i].team == team && players[i].awards.length >= noaward ){
      ans.push(players[i])
      console.log(ans)
    }
  }
  return ans
}

//Progression 9 - Sort players in descending order of their age
function sortByAge() {
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      if (players[i].age < players[j].age) {
        let temp = players[i];
        players[i] = players[j];
        players[j] = temp;
      }
    }
  }
  return players; // Return the sorted array
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamxSortByNoOfAwards(team){
  let count=0;
  let filteredPlayers=[];
  for(let i=0;i<players.length;i++){
    if(players[i].team==team){
      filteredPlayers[count++]=players[i];
}
  }
  for(let i=0;i<filteredPlayers.length;i++){
    for(let j=i+1;j<filteredPlayers.length;j++){
      if(filteredPlayers[i].awards.lrngth<filteredPlayers[j].awards.length){
        let temp=filteredPlayers[i];
        filteredPlayers[i]=filteredPlayers[j];
        filteredPlayers[j]=temp;
      }
    }
  }
  return filteredPlayers;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function compare(a,b){
  let value=0;
  if(a.name>b.name){
    value=1;
  }
  else if(a.name<b.name){value=-1}
  else{value=0;}
}
function SortByNamexAwardxTimes(awardName,noOfAwards,country){
  var dataone=filterByAwardxTimes(awardName,noOfAwards);
  var datatwo=dataone.filter(player=>player.country==country);
  return datatwo.sort(compare);
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
  var data=players.filter(player=>player.age>age);
  return data;
}