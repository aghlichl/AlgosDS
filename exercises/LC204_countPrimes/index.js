var countPrimes = function (n) {
  //initialize primes array
  var primes = [];

  for (var i = 0; i < n; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  //algo for setting prime values to false in array
  for (var i = 2; i < Math.sqrt(n); i++) {
    for (j = 2; i * j < n; j++) {
      primes[i * j] = false;
    }
  }

  var count = 0;

  //counter loop
  for (var i = 0; i < primes.length; i++) {
    if (primes[i]) count++;
  }
  return count;
};
