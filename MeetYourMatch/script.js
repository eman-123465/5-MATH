"use strict";

// Variables for the current profile
let firstName = "";
let lastName = "";
let hairColour = "";
let eyeColour = "";
let age = 0;
let description = "";
let imageFile = "";

/** This function hides the profile when the webpage loads. **/
function start() {
    document.getElementById("name").textContent = "";
    document.getElementById("first-name").textContent = "";
    document.getElementById("last-name").textContent = "";
    document.getElementById("hair-colour").textContent = "";
    document.getElementById("eye-colour").textContent = "";
    document.getElementById("age").textContent = "";
    document.getElementById("description").textContent = "";
    document.getElementById("profile-image").style.visibility = "hidden";
}

/** This function displays Kendall Jenner's profile. **/
function showKendall() {
    firstName = "Kendall";
    lastName = "Jenner";
    hairColour = "Brown";
    eyeColour = "Brown";
    age = 30;
    description = "Kendall Jenner is an American model and media personality.";
    imageFile = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_5GEvM98ail338IvOQEaw5kM7Wftq_Slf-ImkAg97N1y74-uDecV2yV8B&s=10";

    displayProfile();
}

/** This function displays Gigi Hadid's profile. **/
function showGigi() {
    firstName = "Gigi";
    lastName = "Hadid";
    hairColour = "Blonde";
    eyeColour = "Blue";
    age = 31;
    description = "Gigi Hadid is an American fashion model.";
    imageFile = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bkR1gF6a5H0rPkKWepV4zjuskkbpjiZIsIQ0MV38tb7vfNgaDm69qxA&s=10";

    displayProfile();
}

/** This function displays Hailey Bieber's profile. **/
function showHailey() {
    firstName = "Hailey";
    lastName = "Bieber";
    hairColour = "Brown";
    eyeColour = "Brown";
    age = 29;
    description = "Hailey Bieber is an American model.";
    imageFile = "https://upload.wikimedia.org/wikipedia/commons/d/d6/Hailey_Bieber_at_WWD_Style_Awards_2026.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original";

    displayProfile();
}

/** This function displays the current person's information. **/
function displayProfile() {
    document.getElementById("name").textContent =
        firstName + " " + lastName;

    document.getElementById("first-name").textContent =
        "First Name: " + firstName;

    document.getElementById("last-name").textContent =
        "Last Name: " + lastName;

    document.getElementById("hair-colour").textContent =
        "Hair Colour: " + hairColour;

    document.getElementById("eye-colour").textContent =
        "Eye Colour: " + eyeColour;

    document.getElementById("age").textContent =
        "Age: " + age;

    document.getElementById("description").textContent =
        description;

    document.getElementById("profile-image").src = imageFile;
    document.getElementById("profile-image").style.visibility = "visible";
}

/** This function logs off and hides the profile. **/
function logoff() {
    document.getElementById("name").textContent = "";
    document.getElementById("first-name").textContent = "";
    document.getElementById("last-name").textContent = "";
    document.getElementById("hair-colour").textContent = "";
    document.getElementById("eye-colour").textContent = "";
    document.getElementById("age").textContent = "";
    document.getElementById("description").textContent = "";
    document.getElementById("profile-image").style.visibility = "hidden";
    document.getElementById("buttons").style.visibility = "hidden";
}