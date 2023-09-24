// function focusfunctions(element){
//     element.parentElement.classList.add("error-group");
// }

// function blurfunctions(element){
//     element.parentElement.classList.remove("error-group");
// }

// function inputfunctions(element){
//     let check = element.value;
//     document.getElementsByClassName("screen-hed")[0].innerHTML = check;
// }

// function changefunctions(element){
//     let check = element.value;
//     document.getElementsByClassName("screen-hed")[0].innerHTML = check;
// }

// function selectfuntions(element){
//     console.log("You selected some text")
//     document.getElementsByClassName("screen-hed")[0].innerHTML = check;
// }

function submitfunction(){
    let selectvalue = document.getElementById("select").value;
    document.getElementsByClassName("screen-hed")[0].innerHTML = selectvalue;
    alert(selectvalue);
}
