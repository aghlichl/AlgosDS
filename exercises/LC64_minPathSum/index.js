var minPathSum = function(grid) {
    //intiialize endpoints for x y loop params
    const i = grid.length - 1
    const j = grid[0].length - 1
    
    //nested loop over the grid
    for(let k = 0; k <= i; ++k) {
        for(let l = 0; l <= j; ++l) {
            if(k > 0 && l > 0)
               //min check and reassignment
                grid[k][l] = Math.min(grid[k][l] + grid[k][l - 1], grid[k - 1][l] + grid[k][l])
            else if(k > 0 || l > 0) {
                if(l > 0)
                    grid[k][l] += grid[k][l - 1]
                else
                    grid[k][l] += grid[k - 1][l]
                }   
        }
    }
    //return the minPathSum
    return grid[i][j]
};