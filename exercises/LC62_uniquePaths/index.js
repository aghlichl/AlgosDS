var uniquePaths = function (m, n) {
  //base case for empty parameters
  if (m === 0 || n === 0) {
    return 0;
  }

  //initialize base path
  var dp = [[1]];

  //loop for each set
  for (var i = 1; i < n; i++) {
    dp[0][i] = 1;
  }
  for (var j = 1; j < m; j++) {
    dp.push([]);
    dp[j][0] = 1;
  }

  //third loop to finalize the check  
  for (i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  //return unique pairs
  return dp[m - 1][n - 1];
};
