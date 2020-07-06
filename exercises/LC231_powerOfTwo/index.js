var powerOfTwo = function(n){
    let i=1;
    while(i<n){
        i*=2;
    }
    return i==n;
    /*
    or return Math.log2(n) % 1 === 0 
    */
}