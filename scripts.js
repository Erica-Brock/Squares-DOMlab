/* End goal= # IamBham - Squares Lab
## Due Monday 12:00pm

## Info
* To practice using DOM functions, you will not write any HTML in this lab
* You will not be given a basic HTML file.
* Create a JavaScript file and import it into your html file
* Create a CSS stylesheet and import it into your html file

## Objectives
* When the browser first loads, create and insert a button labeled `Add Square` into the page
* When the button is clicked, a new `div` should be added to the page
    * The `div` should be a black square
    * The squares should flow horizontally across the page
        * When there is no more room, they should wrap to the next line (this will happen automatically once you get them next to each other flowing horizontally)
    * All of these `div` elements added to the page should share a single class name
    * Each `div` should have an `id` with a numerical value equivalent to the number of squares that are in the page when the `Add Square` button is clicked
        * Ex: There are already 7 squares on the page. When the button is clicked, another square should be added to the page, and it should have `id="7"`.
        * In this lab, you may run into scenarios where you will have multiple elements with the same `id`. It will be okay.
    * When hovering over a square, the value of the square's `id` should display centered in the square, and disappear when the cursor is no longer over the square
    * When a square is clicked, it should change to a random background color (You can randomly choose from a set of colors you predefine if you wish)
    * When a square is double clicked, the following should occur:
        * If the `id` of the square is even:
            * The square after the clicked square should be removed from the page
            * If there isn't a square after the clicked square, display an alert indicating so
        * If the `id` of the square is odd:
            * The square before the clicked square should be removed from the page
            * If there isn't a square before the clicked square, display an alert indicating so

## Hints
* You will be using DOM functions to complete this portion of the lab
* Remember that elements can be added to other elements
    * document.body.appendChild(someElement);
    * someElement.appendChild(someOtherElement);
* All of the squares have the same class name
    * You can use that to give them a uniform appearance using CSS
    * You can also use that to find out how many squares are on the screen (think DOM function)*/

//1. create an 'add square'  button
//create a button
//create a container for button
//make button say 'Add square'
//put button and container on page
//2.make 'add square' button create a clickable div w/ black background 
// add event listener "click" to button
//create a button
//create a div
//give the div the class 'squares'
// style the div to be a uniform square 
//have a black background
//align on the page horizontally 
//wrap to next line when runs out of space
//put div inside button
//put button on page
//3. make the div have an id of its postiion on the page
//get the elemenets in class "square"
//make id of div = "squares" length
    //4. Make div have a number eqaul to its postion on page only displayed when hovered over
        // addEventLister for hover(does that exist?)no mouseover
        // create p
        //make p innertext= the number of the square
            //p=id
        //make p center of square
            //style in css
        //add event listener (mouse out)
        // remove the p
         //5. make the squares change colors when clicked
       //create a style in css the same as original div except for random color change
       //add event listener click
       // change class of div to new colored div

var squareCounter = 0;
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
document.addEventListener("DOMContentLoaded", function () {
    var squareButton = document.createElement('button');
    squareButton.innerText = "Add Square";
    squareButton.id = "square-button"
    var squareButtonContainer = document.createElement('div');
    squareButtonContainer.appendChild(squareButton);
    document.body.appendChild(squareButtonContainer);
    squareButton = document.getElementById("square-button");
    squareButton.addEventListener("click", function () {
        squareCounter++;
        var newSquare = document.createElement('div');
        newSquare.className = "squares";
        squareNumber = document.createElement("h3");
        squareNumber.innerText = squareCounter;
        document.body.appendChild(newSquare);
        newSquare.id = squareCounter;
        newSquare.appendChild(squareNumber);
        newSquare.addEventListener("click", function(){
            newSquare.style.background= randomColor()
        })
        newSquare.addEventListener("mouseout",function(event){
            event.target.style.color="transparent"
        })
        newSquare.addEventListener("mouseover", function(event){
           event.target.style.color="white";
        })
        newSquare.addEventListener("dblclick", function(){
            

        })


    })

    
  
})






//6. make the even squares delete the square in
