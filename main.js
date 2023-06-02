console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1e = document.getElementById("node1");
//console.log(node1)
node1e.textContent = `I used the getElementById("node1") method to access this`;
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2");
node2[0].textContent = `I used the getElementByClassName("node2") method to access this`;
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let node3 = document.getElementsByTagName("h3");
for (let ele of node3){
ele.textContent = `I used the getElementByTagName("h3") method to access all of these`;
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let ex2 = document.createElement("p");
ex2.textContent = `This node was created using the createElement() method`;
// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.querySelector("#parent");
parent.appendChild(ex2);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let ex2a = document.createElement("a");
ex2a.textContent = `I am an <a> tag`;
// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(ex2a, ex2 );
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let num3 = document.createElement("p");
num3.textContent = `New Child Node`;
let parentE3 = document.querySelector("#exercise-container3");
let childNode = document.querySelector("#N1");
parentE3.replaceChild(num3, childNode);
// TODO: Remove the "New Child Node"
setTimeout(() => {
parentE3.removeChild(num3);
}, 3000);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let unorderedList = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
for(let i = 0;i < list.length; i++){
    var listItem = document.createElement("li");
    listItem.textContent = list[i];
    unorderedList.appendChild(listItem);
}
// TODO: Append the new list items to the unordered list element
// TODO: Append the unordered list to the `div#container` under exercise 4 
let divCont = document.querySelector("#container");
divCont.appendChild(unorderedList);
/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
let btn = document.getElementById("btn");
let exercise5 = document.querySelector(".exercise5");
function show(){
    let parDiv = document.createElement("div");
    let chilDiv = document.createElement("div");
    chilDiv.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    parDiv.id ="modal";
    chilDiv.classList.add("modal-card");
    parDiv.appendChild(chilDiv);
    exercise5.appendChild(parDiv);
}
btn.addEventListener("click", show);
