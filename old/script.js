//01 javascript console api
// console.log("This Is A Console Log Api", 4 + 4);
// console.warn("This Is A Console warn Api");
// console.error("This Is A Console warn Error");
// console.assert(8 == 7);
// console.assert(8 == 8);

// ==========================================================================

//02 ways to print javascript
// alert('hello world');
// document.write('bhavanisinh parmar');

// only working with id and tag Name
// h1.innerHTML = "bhavanisinh";

// console.log(document.getElementsByTagName('h1'));
// document.getElementsByTagName('h1')[0].innerHTML = "bhavanisinh";
// document.getElementsByTagName('h1')[0].style.background = "red";

// console.log(document.getElementsByClassName('h1'));
// document.getElementsByClassName('h1')[1].innerHTML = "bhavanisinh";
// document.getElementsByClassName('h1')[1].style.background = "red";

// console.log(document.getElementById('h1'));
// document.getElementById('h1').innerHTML = "bhavanisinh";
// document.getElementById('h1').style.background = "red";
// document.getElementById('h1').style.color = "#fff";
// document.getElementById('h1').style.padding = "10px";

// console.log(document.querySelectorAll('h1'));
// document.querySelectorAll('h1')[1].innerHTML = "bhavanisinh";
// document.querySelectorAll('h1')[1].style.background = "red";

// ==========================================================================

//03 Javascript Variables
// What Are Variables? = Containers To Store Data Values
// var number1 = 1997;
// var number2 = 0801;
// console.log(number1 + number2);

    // let text = document.getElementById('h1');
    // text.innerHTML = "this is var text with change text";
    // text.style.background = "red";
    // text.style.padding = "10px";
    // text.style.color = "#fff";

    // let text2 = document.querySelectorAll('h1')[1];
    // text2.innerHTML = "this is var text2 with change text";
    // text2.style.background = "red";
    // text2.style.padding = "10px";
    // text2.style.color = "#fff";

    // let text3 = document.getElementsByClassName('h1')[1];
    // text3.innerHTML = "this is var text3 with change text";
    // text3.style.background = "red";
    // text3.style.padding = "10px";
    // text3.style.color = "#fff";

// ==========================================================================

//04 Javascript Data Types
// Numbers, String, booleans, undefinde, null, symbol, Arrays, Objects, 

/* 
    At a vary high level, there are two types of data types in javascript
    1. primitive data types: undefined, null, number, string, boolean, symbol
    2. Referencs data types: Arrays and Objacts 
*/
// var num1 = 08/01/1997;
// console.log(num1);

// var str1 = "08/01/1997";
// console.log(str1);

// var marks = {
//     bhavanisinih: 100,
//     ravi: 0,
// };

// console.log(marks);


// let brithdate = {
//     bhavanisinh: 08,
//     ravi: 07,
// }
// console.log(brithdate);

// var true1 = true;
// var false1 = false;
// console.log(true1);

// var und = "undefinend";
// var und1;
// console.log(und);
// console.log(und1);

// var n = null;
// console.log(n);

// var arr = [1, 2, 3, 'bhavanisinh', 4, 5];
// console.log(arr);
// console.log(arr[3]);

// let arrr = [08/01/1997,"kjdfvbfrkd","cbhdsjvcdb",1997,"vhbdvjws", "08/01/1997"];
// console.log(arrr);
// console.log(arrr[4]);
// console.log(arrr[3]);

// ==========================================================================

//05 Operators In javascript
// var oper1 = 21;
// var oper2 = 3;

// Arethmetic optators +, -, *, /
// console.log("the value of oper1 + oper2 =", oper1 + oper2);
// console.log("the value of oper1 - oper2 =", oper1 - oper2);
// console.log("the value of oper1 * oper2 =", oper1 * oper2);
// console.log("the value of oper1 / oper2 =", oper1 / oper2);

//assignment operators += value, -= value, *= value, /=value 
// var assi = oper2;
// assi += 5;
// console.log(assi)
// assi -= 11;
// console.log(assi)
// assi *= 27;
// console.log(assi)
// assi /= 3;
// console.log(assi)

//comparison operators ==, <, >, <=, >=
// var comp1 = 08;
// var comp2 = 07;
// console.log(comp1 == comp2);
// console.log(comp1 < comp2);
// console.log(comp1 > comp2);
// console.log(comp1 <= comp2);
// console.log(comp1 >= comp2);

//Logical operators &&(end), ||(or), not(!)
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(!false);
// console.log(!true);

// ==========================================================================

//06 Fuction Example
// function avg(a, b) {
//     c = (a + b) / 2;
//     return c;
// }

// c1 = avg(1, 5, 6);
// c2 = avg(5, 15, 5);
// console.log(c1, c2);

// ==========================================================================

//07 Conditionals in Javascript

// Single if Statement
// var singleif = 17;
// if (singleif >= 18) {
//     console.log("yes, you will get a driver's license");
//     alert("yes, you will get a driver's lience");
// }


// if else Statement
// var ifelse = 17;
// if (ifelse >= 18) {
//     console.log("yes, you will get a driver's license");
//     alert("yes, you will get a driver's lience");
// } else {
//     console.log("No, you will get a driver's license after 18 years old");
//     alert("No, you will get a driver's license after 18 years old");
// }

// if-else Ladder
// var ifelseladder = 17;
// if (ifelseladder > 100) {
//     console.log("you are over age");
//     alert("No, you will get a driver's license after 18 years old");
// } else if (ifelseladder >= 18) {
//     console.log("yes, you will get a driver's license");
//     alert("yes, you will get a driver's lience");
// } else {
//     console.log("No, you will get a driver's license after 18 years old");
//     alert("No, you will get a driver's license after 18 years old");
// }


// var array = [1, 2, 3, 'bhavanisinh', 4, 5];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);

// }



// array.forEach(element => {
//     console.log(element);
// });

// array.forEach(function(element){
//     console.log(element);
// });


// array.forEach(element => {
// array.forEach(function(element){
//     console.log(element);
// });




// let text = "";
// let arraya = 0;
// while (arraya <= array.length ) {
//     // console.log(array[arraya]);
//     text += "<br>" + array[arraya];
//     arraya++;
// };

// do{
//     console.log(array[arraya]);
//     text += "<br>" + array[arraya];
//     arraya++;
// } while (arraya <= array.length);

// document.getElementById('text').innerHTML = text;


// for (let i = 0; i < array.length; i++) {
//     if(i==3){
//         // break;
//         continue;
//     };
//     console.log(array[i]);
// }

// let newarry = ["chsvcj", null, "jhsvcj", 5, 5, 8, 56];
// console.log(newarry.length);
// newarry.pop();
// newarry.push("bhavansinh");
// newarry.shift();
// newarry.unshift("bhavansinh");
// console.log(newarry.unshift("bhavansinh"));
// console.log(newarry);

// ==========================================================================

//08 strings in javascript

// let mystring = 'bhavanisinh is great is boy';
// console.log(mystring.length);
// console.log(mystring.lastIndexOf('great'));
// console.log(mystring.lastIndexOf('is'));
// console.log(mystring.indexOf('is'));
// console.log(mystring.slice(0,11));

// let d = mystring.replace("bhavanisinh", "rahul");
// d = d.replace("great", "good");
// console.log(d, mystring);


//08 Date in javascript

// let time = new Date();
// console.log(time.getDate());
// console.log(time.getMinutes());
// console.log(time.getMilliseconds());
// console.log(time.getDay());
// console.log(time.getFullYear());
// console.log(time.getHours());
// console.log(time.getTime());
// console.log(time.getTimezoneOffset());
// console.log(time.getUTCDate());
// console.log(time.getUTCDay());

//08 DOM Manipulation in javascript

// let mybtn = document.getElementById('mybtn');
// console.log(mybtn);

// let taname = document.getElementsByClassName('h1');
// console.log(taname);

// taname[0].style.color = "red";
// taname[0].classList.add('active');
// taname[0].classList.remove('active');

// console.log(mybtn.innerHTML);
// console.log(mybtn.innerText);
// console.log(taname[0].innerHTML);
// console.log(taname[0].innerText);

// let find = document.getElementsByTagName('h1');
// console.log(find);
// let createdpera = document.createElement('p')
// createdpera.innerText = 'this pera created by javascript';
// find[1].appendChild(createdpera);

// let createdpera2 = document.createElement('b')
// createdpera2.innerText = 'this bold created by javascript';
// find[1].appendChild(createdpera2);
// find[1].replaceChild(createdpera2, createdpera);
// find[1].removeChild(createdpera2);


// seleting In javascript

// let sel = document.querySelector('.h1')
// console.log(sel);

// sel = document.querySelectorAll('.h1')
// console.log(sel);

// Events In Javascript

// function clicked(){
//     console.log("the button was clicked")
// };

// window.onload = function(){
//     console.log("the window was loaded");
// };

// mybtn.addEventListener("click", function(){
//     document.querySelector('body').style.background = "red";
//     document.getElementById('h1').style.color = "white";
//     document.getElementsByTagName('h1')[2].innerHTML = "lorem tag neme 2";
//     console.log("click hua");
// });

// events.addEventListener("mouseover", function(){
//     console.log("hover hua");
// })

// events.addEventListener("mouseout", function(){
//     console.log("out hua");
// });



// let prevHTMl = document.getElementsByTagName('h1')[2].innerHTML = "Kardiya Rajput";
// events.addEventListener("mouseup", function(){
//     console.log("up hua");
//     document.getElementsByTagName('h1')[2].innerHTML = "Kardiya";
// });

// events.addEventListener("mousedown", function(){
//     console.log("Down hua");
//     document.getElementsByTagName('h1')[2].innerHTML = "bhavanisinh";
// });





// Arrow Function
// function summ(a, b){
//     return a + b;
// }
// summ = (a, b)=>{
//     return a + b;
// }


// setTimeout & setInterval
// login = ()=>{
//     console.log("2 seconde pachhi hu aavish");
//     document.getElementsByTagName('h1')[2].innerHTML = "bhavanisinih";
// }

// clr = setTimeout(login, 2000);
// clearTimeout(clr);

// clr = setInterval(login, 1);
// clearInterval(clr);





// javascript localStorage
// localStorage.setItem('b','1');
// localStorage.setItem('name','bhavanisinh');
// localStorage
// localStorage.removeItem('name');
// localStorage.clear();


// JSON
// let obj = marks;
// obj = {a: {this: 'that'}};
// // console.log(obj);
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);

// parsed = JSON.parse('{"bhavanisinih":100,"ravi":0}');
// console.log(parsed);

// // Template literals - Backticks

// bhvcdsh = "08/01/1997" ;
// console.log(`My brithday date is ${bhvcdsh}`); 

// fvbgdfb = JSON.parse('{"Bhavansinh":100,"Parmar":59,"1997-01-08":54,"male":54}');
// console.log(fvbgdfb);


// let  cvfs = {
//     Bhavansinh: 100, 
//     Parmar: 59, 
//     bghtghftr: 54, 
//     male: 54
// };

// dfgbdf = JSON.stringify(cvfs);
// console.log(dfgbdf);