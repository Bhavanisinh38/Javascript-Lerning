// --- Traversal parentElement Method --- // 
// document.querySelectorAll(".noti-heading")[0].parentElement.style.backgroundColor = "#eb0000";

// document.querySelectorAll(".noti-heading")[0].parentElement.parentElement.style.backgroundColor = "red";

// let check_pE = document.querySelectorAll(".noti-heading")[0].parentElement.parentElement.parentElement.parentElement.parentElement;
// console.log(check_pE);


// --- Traversal parentNode Method --- // 
// document.querySelectorAll(".noti-heading")[0].parentNode.style.backgroundColor = "rgb(0 255 0)";

// document.querySelectorAll(".noti-heading")[0].parentNode.parentNode.style.backgroundColor = "green";

// let check_PN = document.querySelectorAll(".noti-heading")[0].parentNode.parentNode.parentNode.parentNode.parentNode;
// console.log(check_PN);


// document.querySelectorAll(".main-section")[0].style.backgroundColor = "#fff";
// document.querySelectorAll(".notification-bx")[0].style.backgroundColor = "#fff";


// --- Traversal children Method --- // 
// let check_CD = document.querySelectorAll(".main-section")[0].children[0].children[3].children[4].children[1].children[1].innerText = "31/31/2999";
// console.log(check_CD);


// --- Traversal childNodes Method --- // 
// let check_CN = document.querySelectorAll(".main-section")[0].childNodes[1].childNodes[7].childNodes[9].innerHTML = '<div class="item-img"><img src="/img/avatar2.png" alt=""></div><div class="item-text"><h1 class="it-heading">Khammaba Bhavanisinh Parmar</h1><p class="it-bod">08/01/1997</p></div>';
// console.log(check_CN);


// --- Traversal firstElementChild & firstchild Method --- // 
// let check_FEC = document.querySelectorAll(".main-section")[0].firstElementChild.children[2].children[0].firstElementChild.innerText = "Love";
// console.log(check_FEC);

// let check_fec2 = document.querySelectorAll(".noti-item")[0].firstChild;
// check_fec2 = document.querySelectorAll(".it-bod")[0].firstChild;
// console.log(check_fec2);


// --- Traversal lastElementChild & lastChild Method --- // 
// let check_LEC = document.querySelectorAll(".main-section")[0].lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastChild.innerText = "bah"
// console.log(check_LEC);


// --- Traversal prevSibling & nextSibling Method --- // 
// let check_ns = document.querySelectorAll("#profile-3")[0].nextSibling.nextSibling.classList.add("nextSibling");
// console.log(check_ns);

// let check_nes = document.querySelectorAll("#profile-3")[0].nextElementSibling.nextElementSibling.classList.add("nextElementSibling");
// console.log(check_nes);

// let check_ps = document.querySelectorAll("#profile-3")[0].previousSibling.previousSibling.classList.add("previousSibling");
// console.log(check_ps);

// let check_pes = document.querySelectorAll("#profile-3")[0].previousElementSibling.previousElementSibling.classList.add("previousElementSibling");
// console.log(check_pes);