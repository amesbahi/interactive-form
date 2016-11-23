
// When the page loads, give focus to the first text field.
window.onload = function() {
    document.getElementById("name").focus();
}

// Global variabls
var jobRoleSelection = document.getElementById("title");
var basicInfoSection = document.getElementsByClassName("basicinfo")[0];
var designSelection = document.getElementById("design");
var colorSelection = document.getElementById("color");
var activities = document.getElementsByClassName("activities")[0];
console.log(jobRoleSelection);
console.log(basicInfoSection);
console.log(designSelection);
console.log(colorSelection);
console.log(colorSelection.selectedIndex);
console.log(activities);
// colorSelection.selectedIndex = 1;
console.log(colorSelection);
console.log(document.getElementsByClassName("puns")[0]);

// "Job Role" section of the form: reveal a text field when the "Other" option is selected from the "Job Role" drop down menu
jobRoleSelection.addEventListener("change", function () {

    // Variable containing the selecting job role from the job role dropdown
    var selectedJobRole = jobRoleSelection.options[jobRoleSelection.selectedIndex].value;
    console.log(selectedJobRole);

    // If the "other" option is selected, display a text field
    if (selectedJobRole === "other") {
        var otherTextField = document.createElement('input');
        otherTextField.setAttribute('id', 'other-title');
        otherTextField.setAttribute('placeholder', 'Your Title');
        otherTextField.setAttribute('type', 'text');

        basicInfoSection.appendChild(otherTextField);
    }

});

// For the T-Shirt color menu, only display the options that match the design selected in the "Design" menu
designSelection.addEventListener("change", function () {

    // Variable containing the selected option from design
    var selectedDesign = designSelection.options[designSelection.selectedIndex].value;
    console.log(selectedDesign);

    // Depending on which design is selected, display the matching colors and hide the colors that do not match design
   if (selectedDesign === "js puns") {

       // Grab the first option for "puns" and have it display as selected
       colorSelection.selectedIndex = 0;

       document.getElementsByClassName("heart")[0].style.display = 'none';
       document.getElementsByClassName("heart")[1].style.display = 'none';
       document.getElementsByClassName("heart")[2].style.display = 'none';

       document.getElementsByClassName("puns")[0].style.display = 'block';
       document.getElementsByClassName("puns")[1].style.display = 'block';
       document.getElementsByClassName("puns")[2].style.display = 'block';
       
   } else if (selectedDesign === "heart js") {

       // Grab the first option for "heart js" and have it display as selected
       colorSelection.selectedIndex = 3;

       document.getElementsByClassName("puns")[0].style.display = 'none';
       document.getElementsByClassName("puns")[1].style.display = 'none';
       document.getElementsByClassName("puns")[2].style.display = 'none';

       document.getElementsByClassName("heart")[0].style.display = 'block';
       document.getElementsByClassName("heart")[1].style.display = 'block';
       document.getElementsByClassName("heart")[2].style.display = 'block';

   } else if (selectedDesign === "select theme") {

       // Grab the first option in the select menu and have it display as selected
       colorSelection.selectedIndex = 0;

       document.getElementsByClassName("puns")[0].style.display = 'block';
       document.getElementsByClassName("puns")[1].style.display = 'block';
       document.getElementsByClassName("puns")[2].style.display = 'block';

       document.getElementsByClassName("heart")[0].style.display = 'block';
       document.getElementsByClassName("heart")[1].style.display = 'block';
       document.getElementsByClassName("heart")[2].style.display = 'block';
   }

});

/* If the user selects a workshop, don't allow selection of a workshop at the same date and time
Disable the checkbox and visually indicate that the workshop in the competing time slot isn't available */
// Maybe make variables containing each checkbox value?

activities.addEventListener("change", function () {

    // Variables containing each workshop checkbox
    var main = document.getElementById("all");
    var jsFrameworks = document.getElementById("js-frameworks");
    var jsLibs = document.getElementById("js-libs");
    var express = document.getElementById("express");
    var node = document.getElementById("node");
    var buildTools = document.getElementById("build-tools");
    var npm = document.getElementById("npm");

    // If a workshop is selected that conflicts with another, disable the other
    if (jsFrameworks.checked == true) {
        express.disabled == true;
    }
});