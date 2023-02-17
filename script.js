/* Declare variables below to save the different sections (divs) of your story*/
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneendScreen = document.querySelector(".option-one-end");
let optionTwoendScreen = document.querySelector(".option-two-end");
let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");

button2.onclick=function(){
	optionOneScreen.style.display = "block";
};

button1.onclick=function(){
	optionTwoScreen.style.display = "block";
};

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


