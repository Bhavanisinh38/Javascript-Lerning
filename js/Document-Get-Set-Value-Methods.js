// Document Get & Set Value Js Example

// let elm_get;

// elm_get = document.getElementById("profile-5");
// console.log(elm_get);

// -----------------------------------------------------------------

// Get innerText Methods
// elm_get = document.getElementById("profile-5").innerText;
// console.log(elm_get);

// -----------------------------------------------------------------

// Get innerHTML Methods
// elm_get = document.getElementById("profile-5").innerHTML;
// console.log(elm_get);

// -----------------------------------------------------------------

// Get getAttribute Methods
// // 01. getAttribute Class Methods
// elm_get = document.getElementById("profile-5").getAttribute("class");
// console.log(elm_get);

// // 02. getAttribute With Id Methods
// elm_get = document.getElementById("profile-5").getAttribute("id");
// console.log(elm_get);

// // 03. getAttribute With Event onClick Methods
// elm_get = document.getElementById("profile-5").getAttribute("onClick");
// console.log(elm_get);

// -----------------------------------------------------------------

// Get getAttributeNode Methods
// // 01. getAttributeNode With Event onClick Methods
// elm_get = document.getElementById("profile-5").getAttributeNode("onClick");
// console.log(elm_get);

// // 02. getAttributeNode With Event onClick Methods
// elm_get = document.getElementById("profile-5").getAttributeNode("onClick").value;
// console.log(elm_get);

// // 03. getAttributeNode With Event onClick Methods
// elm_get = document.getElementById("profile-5").getAttributeNode("onClick").name;
// console.log(elm_get);

// -----------------------------------------------------------------

// Get attributes Methods
// elm_get = document.getElementById("profile-5").attributes;
// console.log(elm_get);

// elm_get = document.getElementById("profile-5").attributes[2];
// console.log(elm_get);

// elm_get = document.getElementById("profile-5").attributes[2].value;
// console.log(elm_get);

// elm_get = document.getElementById("profile-5").attributes[2].name;
// console.log(elm_get);

// ================================================================== //

// let elm_set;

// -----------------------------------------------------------------

// // Set innerText Methods
// elm_set = document.getElementById("noti-head").innerText = "My Notification";
// console.log(elm_set);

// elm_set = document.getElementById("noti-head").innerText = "<h1>My Notification</h1>";
// console.log(elm_set);

// -----------------------------------------------------------------

// // Set innerHTML Methods
// elm_set = document.getElementById("noti-head").innerHTML = "<h1>My Notification</h1>";
// console.log(elm_set);

// -----------------------------------------------------------------

// Set setAttribute Methods
// elm_set = document.getElementsByClassName("noti-tabs-btn");
// console.log(elm_set);

// elm_set = document.getElementsByClassName("noti-tabs-btn")[1];
// console.log(elm_set);

// elm_set = document.getElementsByClassName("noti-tabs-btn")[0].setAttribute("class","noti-tabs-btn");
// elm_set = document.getElementsByClassName("noti-tabs-btn")[1].setAttribute("class","noti-tabs-btn active");
// elm_set = document.getElementsByClassName("noti-tabs-btn")[1].setAttribute("style","border:1px solid red");
// console.log(elm_set);

// -----------------------------------------------------------------

// // Set Attributes Methods
// elm_set = document.getElementsByClassName("noti-item");
// console.log(elm_set);

// elm_set = document.getElementsByClassName("noti-item")[4].attributes;
// console.log(elm_set);

// elm_set = document.getElementsByClassName("noti-item")[4].attributes[2];
// console.log(elm_set);

// elm_set = document.getElementsByClassName("noti-item")[4].attributes[2].value = "time-pass";
// console.log(elm_set);

// // removeAttribute Methods
// elm_set = document.getElementsByClassName("noti-item")[4].removeAttribute("data-target");
// elm_set = document.getElementsByClassName("noti-item")[4].removeAttribute("onClick");
// elm_set = document.getElementsByClassName("noti-item")[4].removeAttribute("class");
// console.log(elm_set);

// ================================================================== //

// let elm_query;

// // querySelector
// elm_query = document.querySelector(".it-heading");
// console.log(elm_query);

// elm_query = document.querySelector(".it-heading").innerText = "Rajveersinh Mori";
// console.log(elm_query);

// elm_query = document.querySelector(".it-heading").innerHTML = "<strong>Jethalala Gala</strong>";
// console.log(elm_query);

// elm_query = document.querySelector(".noti-item .item-img img").attributes[0].value = "./img/avatar2.png"
// console.log(elm_query);

// -----------------------------------------------------------------

// // querySelectorAll
// elm_query = document.querySelectorAll(".it-heading");
// console.log(elm_query);

// elm_query = document.querySelectorAll(".it-heading")[3].setAttribute("style","border:1px solid red");
// console.log(elm_query);

// elm_query = document.querySelectorAll(".it-heading")[3].setAttribute("id","pro-4");
// console.log(elm_query);

// elm_query = document.querySelectorAll(".it-heading")[3].attributes;
// console.log(elm_query);

// elm_query = document.querySelectorAll(".it-heading")[3].attributes[2].value = "it-heading-4";
// console.log(elm_query);

// elm_query = document.querySelectorAll(".noti-item .item-img img")[3].attributes[0].value = "./img/avatar.png"
// console.log(elm_query);

// ================================================================== //

// let elm_tag;

// elm_tag = document.getElementsByTagName("img");
// console.log(elm_tag);

// elm_tag = document.getElementsByTagName("img")[3].setAttribute("class","item-img");
// console.log(elm_tag);

// elm_tag = document.getElementsByTagName("img")[3].setAttribute("alt","Harpalsinh Dodiya");
// console.log(elm_tag);

// elm_tag = document.getElementsByTagName("img")[3].setAttribute("src","/img/avatar.png");
// console.log(elm_tag);

// elm_tag = document.getElementsByTagName("img")[3].removeAttribute("src");
// console.log(elm_tag);

// elm_tag = document.getElementsByTagName("img")[3].attributes;
// console.log(elm_tag);

// elm_tag = document.getElementsByTagName("img")[3].attributes[0].value = "/img/avatar2.png";
// console.log(elm_tag);

// elm_tag = document.getElementsByTagName("img")[3].attributes[1].value = document.getElementsByTagName("h1")[3].innerText;
// console.log(elm_tag);