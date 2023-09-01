const mtnNum = [67,68,65];

//generer un nombre entier aléatoire entre un nombre min et max (le max étant inclus)
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//génerer les trois premiers chiffres du numéro
function generateMtnStartingNumber () {
  let startNum = mtnNum[randomInteger(0,2)];
  let max = 9;
  if(startNum === 65){
    max = 4;
  }
  startNum = startNum*10 + randomInteger(0,max);
  return startNum.toString();
}

//génerer le reste des chiffres
function generateMtnEndNumber () {
  let endNum = "";
  for(let i = 0;i<6;i++){
    endNum+= randomInteger(0,9).toString();
  }
  return endNum;
};


//génerer le numéro Mtn
export const createNumber=() => {
  let startNum = generateMtnStartingNumber();
  let endNum = generateMtnEndNumber();
 return ( startNum+endNum)
}

