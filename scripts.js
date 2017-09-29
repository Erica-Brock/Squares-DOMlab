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
    document.body.appendChild(squareButton);
    squareButton = document.getElementById("square-button");
    newSquareContainer=document.createElement("div");
    newSquareContainer.id="square-container";
    newSquareContainer.className="square-container";
    document.body.appendChild(newSquareContainer);
    squareButton.addEventListener("click", function () {
        squareCounter++;
        var newSquare = document.createElement('div');
        newSquare.className = "squares";
        squareNumber = document.createElement("h3");
        squareNumber.innerText = squareCounter;
        newSquareContainer.appendChild(newSquare);
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
            var n=Number(newSquare.id)
            var x=n%2;
            if (x===0){
                var n=newSquare.id;
                deleteSquare=document.getElementById(n).nextElementSibling;
                if(deleteSquare===null){
                    alert("There is no box to the right. Create more boxes.");
                }
                else{
                newSquareContainer.removeChild(deleteSquare);
                }   
            }
            else if(x===1){
                var n=newSquare.id;
                deleteSquare=document.getElementById(n).previousElementSibling;
                if(deleteSquare===null){
                    alert("There is no box to the left. Create more boxes.");
                }
                else{
                newSquareContainer.removeChild(deleteSquare);
                }
            }        
        })
    })      
})

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