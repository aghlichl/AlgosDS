var rotate = function (matrix) {
  const n = matrix.length;
  for (let i = 0; i < Math.ceil(n / 2); i += 1) {
    for (let j = i; j < n - 1 - i; j += 1) {
      let a = matrix[i][j];
      let b = matrix[j][n - 1 - i];
      let c = matrix[n - 1 - i][n - 1 - j];
      let d = matrix[n - 1 - j][i];

      matrix[j][n - 1 - i] = a;
      matrix[n - 1 - i][n - 1 - j] = b;
      matrix[n - 1 - j][i] = c;
      matrix[i][j] = d;
    }
  }
};
