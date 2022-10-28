'use strict';

// Create slider variables. Finding them with the id
const background = document.querySelector('#hue');
const text = document.querySelector('#hue2');
const root = document.querySelector(':root');

// Function for the background colour slider
const backgroundSlider = function() {
  root.style.setProperty("--hue", background.value);
}

// Function for the text colour slider
const textSlider = function() {
  root.style.setProperty("--hue2", text.value);
}

// Event listeners for the sliders
text.addEventListener("input", textSlider);
background.addEventListener('input', backgroundSlider);

// TODO: Clean up the code to one function
// Creating the variable for the shapes
const square = document.querySelector('.square');
const circle = document.querySelector('.circle');
const triangle = document.querySelector('.triangle');

// Creating the variables for the buttons
const btnsquare = document.querySelector('.btnsquare');
const btncircle = document.querySelector('.btncircle');
const btntriangle = document.querySelector('.btntriangle');

// Function to hide shapes with toggling the class
const hideSquare = function() {
  square.classList.toggle('square')
};

const hideCircle = function() {
  circle.classList.toggle("circle");
};

const hideTriangle = function() {
  triangle.classList.toggle("triangle");
}; 

// Event Listener for the buttons
btnsquare.addEventListener("click", hideSquare);
btncircle.addEventListener("click", hideCircle);
btntriangle.addEventListener("click", hideTriangle);



// Creating the variable for the images
const imageSelect = document.getElementById('image-select');

// TODO: Clean up the code to not have to include each image for every option and to speed up the image selection.
// Function to hide or show the image based on the selection
 const imageSelections = function() {
  if( imageSelect.value == 1){
    document.querySelector('.city').style.display = "block";
    document.querySelector('.nature').style.display = 'none';
    document.querySelector('.animals').style.display = "none";
    document.querySelector('.sports').style.display= "none";
    } if( imageSelect.value == 2){
    document.querySelector('.city').style.display = "none";
    document.querySelector('.nature').style.display = 'block';
    document.querySelector('.animals').style.display = "none";
    document.querySelector('.sports').style.display= "none";
  } if(imageSelect.value == 3){
    document.querySelector('.animals').style.display = "block";
    document.querySelector('.city').style.display = "none";
    document.querySelector('.nature').style.display = "none";
    document.querySelector('.sports').style.display= "none";
  }
  if(imageSelect.value == 4){
    document.querySelector('.animals').style.display = "none";
    document.querySelector('.city').style.display = "none";
    document.querySelector('.nature').style.display = "none";
    document.querySelector('.sports').style.display= "block";
  }
};

// Event listener for the drop down menu
imageSelect.addEventListener('click', imageSelections );
