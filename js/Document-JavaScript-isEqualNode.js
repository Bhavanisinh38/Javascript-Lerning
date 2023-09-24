let target_1 = document.getElementById("ms-list-1").firstElementChild;
console.log(target_1);
let target_2 = document.getElementById("ms-list-2").firstElementChild;
console.log(target_2);

let check = target_1.isEqualNode(target_2);
console.log(check);