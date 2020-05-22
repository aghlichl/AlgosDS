const climbStairs = n => {
    let initialWays=[0,1,2,3]
    if(n<=3){
        return n;
    }
    for(let i=3; i<n;i++){
        initialWays.push(initialWays[i]+initialWays[i-1])
    }
    return initialWays.pop();
};

module.exports = climbStairs;
