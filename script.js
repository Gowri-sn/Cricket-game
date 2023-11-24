let scoreStr = localStorage.getItem('Score');
let score;

resetScore(scoreStr);


function resetScore(scoreStr){
   score = scoreStr ? JSON.parse(scoreStr) : {
    win: 0,
    lost: 0,
    tie: 0,
    
  }
      score.displayScore = function(){
        return `Result:  Won ${score.win}, Tie ${score.tie}, Lost ${score.lost}`
      }
    

}





  

function generateComputerChoice(){ 
  let randomNumber = Math.random() * 3;

if( randomNumber > 0 && randomNumber <= 1){
   //computerChoice = 'Bat';
   return 'Bat';
  //console.log('computerChoice is Bat');
} else if(randomNumber > 1 && randomNumber <= 2){
  // computerChoice = 'Ball';
  return 'Ball';
  //console.log('computerChoice is Ball');
} else {
   // computerChoice = 'Stump';
   return 'Stump';
   //console.log('computerChoice is Stump');
}
}

function getResult(userMove, ComputerMove){
  let result;
  if(userMove === 'Bat'){
    if(ComputerMove=== 'Ball'){
  //console.log('User won.');
  score.win++;
   return 'User won';
} else if(ComputerMove === 'Bat'){
  //console.log(`It's a tie.`);
  score.tie++;
   return `It's a tie`;
} else {
  //console.log('Computer won');
  score.lost++;
  return 'Computer won';
}
  } else if (userMove === 'Ball'){
    if(ComputerMove === 'Stump'){
  //console.log('User won.');
  score.win++;
  return 'User won';
} else if(ComputerMove === 'Ball'){
  //console.log(`It's a tie.`);
  score.tie++;
  return `It's a tie`;
} else {
  //console.log('Computer won');
  score.lost++;
  return 'Computer won';
}

  } else if(userMove === 'Stump'){
    if(ComputerMove === 'Ball'){
      score.lost++;
      return 'Computer won'
    } else if(ComputerMove === 'Bat'){
      score.win++;
      return 'User won'
    }else if(ComputerMove === 'Stump'){
      score.tie++;
      return `It's a tie`
    }

  }
  
}

function ShowResult(Usermove, Computermove, result){

  localStorage.setItem('Score', JSON.stringify(score));

  document.querySelector('#user-move').innerText = 
       Usermove  ? `You have chosen ${Usermove}` : ' ';
  document.querySelector('#computer-move').innerText = 
     Computermove  ? ` Computer has choosen ${Computermove}` : ' ';
  document.querySelector('#result').innerText = 
   result  ? `${result}` : ' ';
  document.querySelector('#score').innerText = `${score.displayScore()}`

  console.log(score);
  
}
