var canFinish = function(numCourses, prerequisites) {
    graph = new Map();
    visiting = new Set();
    visited = new Set();
    
    for(let [v, e] of prerequisites){
        if(graph.has(v)){
            let edges = graph.get(v);
            edges.push(e);
            graph.set(v,edges);
        }else{
            graph.set(v,[e]);
        }
    }
    
    for(const [v,e] of graph){
        if(DFS(v)){
            return false;
        }
    }
    
    return true;
}

var DFS = function(v){
    visiting.add(v);
    let edges = graph.get(v); 
    
    if(edges){
       for(let e of edges){
            if(visited.has(e)){ 
                continue;
            }
            //if found return true
            if(visiting.has(e)){ 
                return true;
            }
            //cyclic check
            if(DFS(e)){ 
                return true;
            }
        } 
    }   
    
    visiting.delete(v); // remove from visiting set when all decedant v are visited
    visited.add(v);
    return false;
}