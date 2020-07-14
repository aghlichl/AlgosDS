var numJewelsInStones = function (J, S) {
  let jewelCount = 0;
  let jMap ={};
  for(i in J){
      jMap[J[i]]=true;
  }
  for (let k = 0; k < S.length; k++) {
    if (jMap[S[k]]) {
      jewelCount++;
    }
  }

  return jewelCount;
};
