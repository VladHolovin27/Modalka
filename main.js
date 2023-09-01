let a = [8, 2, 2, 5] => arr = [8, 2, 5];
let filterArray = a.filter(function(id, ex) {
    return a.indexOf(id) == ex;
})