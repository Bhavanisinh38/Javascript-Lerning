// // --- Document Create Element Methods (DOM) --- //
// let newElement = document.createElement("h2");
// console.log(newElement);


// // --- Document Create TextNodes Methods (DOM) --- //
// let newText = document.createTextNode("Create TextNodes Methods");
// console.log(newText);


// // --- Document Create Comment Methods (DOM) --- //
// let newcomment = document.createComment("This is comment")
// console.log(newcomment);


// // --- Document appendChild Methods (DOM) --- //
// newElement.appendChild(newText);
// document.querySelectorAll(".main-section")[0].appendChild(newElement);


// // --- Document insertBefore Methods (DOM) --- //
// let target = document.querySelectorAll(".main-section")[0];
// target.insertBefore(newElement,target.childNodes[0]);


// --- Document insertAdjacentElement Methods (DOM) --- //
// let newElement = document.createElement("p");
// let newText = document.createTextNode("This is a InsertAdjacentElement Method Text");
// newElement.appendChild(newText);
// let target = document.getElementsByClassName("main-section")[0];
// target.insertAdjacentElement("afterbegin", newElement);
// // This Is Position // beforebegin [afterbegin, beforeend] afterend


// // --- Document insertAdjacentHTML Methods (DOM) --- //
// let target = document.getElementsByClassName("main-section")[0];
// let newElement = "<p>This is a insertAdjacentHTML method tag with text</p>"
// target.insertAdjacentHTML("beforeend", newElement);
// // This Is Position // beforebegin [afterbegin, beforeend] afterend


// // --- Document insertAdjacentText Methods (DOM) --- //
// let target = document.getElementsByClassName("main-section")[0];
// let newElement = "This is a insertAdjacentHTML method tag with text"
// target.insertAdjacentText("beforeend", newElement);
// This Is Position // beforebegin [afterbegin, beforeend] afterend

// // --- Document replaceChild & removeChild Method (DOM) --- //
// let target = document.getElementsByClassName("main-section")[0];
// let oldelement = target.children[5];
// let oldelement2 = target.children[3];
// let newElement = document.createElement("h2");
// let newText = document.createTextNode("This replaceChild Method Text");
// newElement.appendChild(newText);

// target.replaceChild(newElement, oldelement2);
// target.removeChild(oldelement);


// // --- Document CloneNode Method (DOM) ---
// let getid = document.getElementById("ul1").children[3];
// console.log(getid);

// // Bydefault cloneNode(false) = cloneNode()
// let copyelement = getid.cloneNode(true);
// console.log(copyelement);

// // 01) Example
// let setdata = document.getElementById("ul2").appendChild(copyelement);

// // 02) Example
// setdata.insertAdjacentElement("beforeend",copyelement);

// // 03) Example
// setdata.appendChild(copyelement);


// // --- Document Contains Method (DOM) ---

// let parentele = document.getElementsByClassName("main-section")[0];
// console.log(parentele);

// // Find Class 
// // let target = document.getElementsByClassName("best")[0];
// // console.log(target);

// // let find = parentele.contains(target);
// // console.log(find);

// // Find ID
// // let targetid = document.getElementById("low");
// // console.log(targetid);

// // let idfind = parentele.contains(targetid);
// // console.log(idfind);

// // Find Tag
// // let targettag = document.getElementsByTagName("div")[0];
// let targettag = document.getElementsByTagName("h2")[0];
// console.log(targettag);

// let tagfind = parentele.contains(targettag);
// console.log(tagfind);


// // --- Document hasAttribute & hasChildNodes (DOM) ---

// let target = document.getElementsByClassName("main-section")[0];

// let check = target.hasAttribute("class");
// let check = target.hasAttribute("class","main-section");
// console.log(check);

// let check = target.hasChildNodes();
// // let check = target.hasAttribute("class","main-section");
// console.log(check);