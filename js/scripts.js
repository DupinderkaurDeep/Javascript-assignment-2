// constants for query selector
const myStudentIdElement = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const imagesElement = document.getElementById("images");

// function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value);  // Get user input and convert it to an integer

    // Display student ID
    myStudentIdElement.textContent = "Student ID: 200553418"; 

    // Change background color based on user input
    if (userInput < 0 || userInput > 100) {
        document.body.style.backgroundColor = "red";
    } else if (userInput >= 0 && userInput <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (userInput > 20 && userInput <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (userInput > 40 && userInput <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (userInput > 60 && userInput <= 80) {
        document.body.style.backgroundColor = "purple";
    } else if (userInput > 80 && userInput <= 100) {
        document.body.style.backgroundColor = "yellow";
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomInput = Math.floor(Math.random() * 100) + 1;   // generate random number between 1 and 100
    customNumberInput.value = randomInput;  // Set the random number as the value of the customNumberInput
    changeCustomColor();   // Call the function to change the background color based on the random number
}

// function to generate options for select list
function addList() {
    const imageNames = ["img1", "img2", "img3", "img4", "img5"]; // Array of image names
     // Iterate over the imageNames array and create options for the select list
    imageNames.forEach(function (imageName) {
        const option = document.createElement("option");
        option.value = imageName;
        option.textContent = imageName;
        imageSelect.appendChild(option); // Append each option to the imageSelect element
    });
}

 // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 

// function to change image
function changeImage(){
    const selectedImage = imageSelect.value; // get the selected image name
    imagesElement.src = `img/${selectedImage}.jpg`; // set the source of the iamgesElement based on the selected image
}




// event listeners for on click event of buttons and select
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// event listeners for on change event of select
addList();  //Call the function to add options to the select list