function pop(yourArray) {
    yourArray.pop();
    document.querySelector("#array").innerHTML = yourArray;
}
function shift(yourArray) {
    yourArray.shift();
    document.querySelector("#array").innerHTML = yourArray;
}
function push(yourArray) {
    let pushMe = document.querySelector("#pushInput").value;
    yourArray.push(pushMe);
    document.querySelector("#array").innerHTML = yourArray;
}
function unshift(yourArray) {
    let unshiftMe = document.querySelector("#unshiftInput").value;
    yourArray.unshift(unshiftMe);
    document.querySelector("#array").innerHTML = yourArray;
}


let theArray = ['oreo', 'matcha', 'vanilla'];
document.querySelector("#array").innerHTML = theArray;

console.log(theArray);
