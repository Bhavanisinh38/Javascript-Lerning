// let element;

// --- 1st Method --- //

// document.querySelectorAll(".noti-tabs-btn")[0].onclick = abcd;
// function abcd(){
//     document.querySelectorAll(".noti-tabs-btn")[0].classList.add("active");
//     document.querySelectorAll(".noti-tabs-btn")[1].classList.remove("active");
// }

// document.querySelectorAll(".noti-tabs-btn")[1].onclick = abc;
// function abc(){
//     document.querySelectorAll(".noti-tabs-btn")[1].classList.add("active");
//     document.querySelectorAll(".noti-tabs-btn")[0].classList.remove("active");
// }


// document.getElementsByClassName("noti-tabs-btn")[1].onclick = activeaa;
// function activeaa() {
//      this.classList.add("active");
//      document.getElementsByClassName("noti-tabs-btn")[0].classList.remove("active");
// }


// --- 2nd Method --- //

/* --- 2nd Method Option 1 --- */
// document.getElementsByClassName("noti-tabs-btn")[1].addEventListener("click",abc);
// function abc(){
//     document.getElementsByClassName("noti-tabs-btn")[1].classList.add("active");
//     document.getElementsByClassName("noti-tabs-btn")[0].classList.remove("active");
// }

// document.getElementsByClassName("noti-tabs-btn")[0].addEventListener("click",abcd);
// function abcd(){
//     document.getElementsByClassName("noti-tabs-btn")[0].classList.add("active");
//     document.getElementsByClassName("noti-tabs-btn")[1].classList.remove("active");
// }

/* --- 2nd Method Option 2 --- */

// document.getElementsByClassName("noti-tabs-btn")[1].addEventListener("click", function() {
//     document.getElementsByClassName("noti-tabs-btn")[1].classList.add("active");
//     document.getElementsByClassName("noti-tabs-btn")[0].classList.remove("active");
// });
// document.getElementsByClassName("noti-tabs-btn")[1].addEventListener("mouseenter", function() {
//     this.style.backgroundColor = "blue";
//     document.getElementsByClassName("noti-tabs-btn")[0].style.backgroundColor = "transparent";
// });

// document.getElementsByClassName("noti-tabs-btn")[0].addEventListener("click", function() {
//     document.getElementsByClassName("noti-tabs-btn")[0].classList.add("active");
//     document.getElementsByClassName("noti-tabs-btn")[1].classList.remove("active");
// });
// document.getElementsByClassName("noti-tabs-btn")[0].addEventListener("mouseenter", function() {
//     this.style.backgroundColor = "blue";
//     document.getElementsByClassName("noti-tabs-btn")[1].style.backgroundColor = "transparent";
// });


// --- useCapture Method --- //

// document.querySelectorAll(".item-text")[0].addEventListener("mouseleave", function(){
//     alert("this is outter div");
//     this.style.border = "1px solid red"
// }, false); /* Change this value true or false */

// document.querySelectorAll(".item-text .it-heading")[0].addEventListener("mouseleave", function(){
//     alert("this is inner div");
//     this.style.border = "1px solid blue"
// }, false); /* Change this value true or false */



// --- removeEventListener --- //

// document.getElementsByClassName("noti-item")[0].addEventListener("mouseleave", mous_eleave);
// document.getElementsByClassName("noti-item")[0].addEventListener("click", mous_click);
// document.getElementsByClassName("noti-item")[0].addEventListener("mouseenter", mous_enter);

// function mous_eleave() {
//     this.style.backgroundColor = "red";
// }

// function mous_click() {
//     document.getElementsByClassName("noti-item")[0].removeEventListener("mouseleave", mous_eleave);
// }

// function mous_enter() {
//     document.getElementsByClassName("noti-item")[0].removeEventListener("mouseleave", mous_eleave);
// }