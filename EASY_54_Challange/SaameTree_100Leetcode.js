var isSameTree = function (p,q){
    //base 
    if(p === null && q === null) return true;
    if(p === null || q === null) return false;

    if(p.val === q.val){
        return isSameTree (p.left , q.left) && isSameTree(p.right, q.right);
        
    }
    return false;
}
// let p =[1,2,3];
// let q = [1,2,3]
// console.log(isSameTree(p,q))