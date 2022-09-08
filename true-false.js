/* 
truthy
1.true
2. Any number (-ve, -ve) is truthy except then 0
3. any string is truthy rather then empty string ''
4. '0', ' ', 'false'
5. object is truthy
6. array is truthy
Falsy
1. false
2. 0
3. ''
4 . undefined is falsy
5. null is falsy
*/
let x = null
console.log(x);
if(x){
    console.log("X is truthy")
}
else{
    console.log("Falsy")
}

// optional
// check falsy

const y = null;
if(!y){
    console.log("value is falsy")
}
// check true

const z = {id : 12}
if(!!z){
    console.log("value is truthy")
}