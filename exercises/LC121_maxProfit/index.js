var maxProfit = function (prices) {
  let maxProfit = 0;
  let cheapest = prices[0];
  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - cheapest);
    cheapest = Math.min(prices[i], cheapest);
  }
  return maxProfit;
};

module.exports = maxProfit;
