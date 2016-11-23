
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
activities.addEventListener("change", function () {

    // The workshop checkboxes
    var main = document.getElementsByTagName("input")[name="all"];
    var jsFrameworks = document.getElementsByTagName("input")[name="js-frameworks"];
    var jsLibs = document.getElementsByTagName("input")[name="js-libs"];
    var express = document.getElementsByTagName("input")[name="express"]
    var node = document.getElementsByTagName("input")[name="node"];
    var buildTools = document.getElementsByTagName("input")[name="build-tools"];
    var npm = document.getElementsByTagName("input")[name="npm"];

    // Labels for the workshop checkboxes to be disabled
    var expressLabel = document.getElementById("expresslabel");
    var jsFrameworksLabel = document.getElementById("frameworkslabel");
    var jsLibsLabel = document.getElementById("libslabel");
    var nodeLabel = document.getElementById("nodelabel");

    // Variable containing the total cost of all the workshops
    var totalCost = 0;

    // Variable containing the div to append to the checkboxes section for total cost
    var totalCostDiv = document.createElement('div');
    totalCostDiv.setAttribute("id", "totalcost");

    // Actitivities section with the appended div to inform user of total cost of workshops selected
    activities.appendChild(totalCostDiv);

    // Function to update the cost when workshop is selected
    var updateTotalCost = function (cost) {
        totalCost += cost;
        document.getElementById("totalcost").innerHTML = "Total: $ " + totalCost;
    };

    // If the workshops that do not have a time conflict are checked, update the total cost
    if (main.checked == true) {
        updateTotalCost(200);
    } else {
        updateTotalCost(-200);
    }

    if (buildTools.checked == true) {
        updateTotalCost(100);
    } else {
        updateTotalCost(-100);
    }

    if (npm.checked == true) {
        updateTotalCost(100);
    } else {
        updateTotalCost(-100);
    }

    // If a workshop is selected that conflicts with another, disable the other
    // As a user selects activities to register for, a running total is listed below the list of checkboxes
    if (jsFrameworks.checked == true) {
        express.disabled = true;
        expressLabel.style.color = "grey";
        updateTotalCost(100);
    } else if (express.checked == true) {
        jsFrameworks.disabled = true;
        jsFrameworksLabel.style.color = "grey";
        updateTotalCost(100);
    }

    if (jsLibs.checked == true) {
        node.disabled = true;
        nodeLabel.style.color = "grey";
        updateTotalCost(100);
    } else if (node.checked == true) {
        jsLibs.disabled = true;
        jsLibsLabel.style.color = "grey";
        updateTotalCost(100);
    }

    // If a workshop that conflicted with another is deselected, reenable the disabled, conflicting workshop
    // As a user selects activities to register for, a running total is listed below the list of checkboxes
    if (jsFrameworks.checked == false) {
        express.disabled = false;
        expressLabel.style.color = "black";
        updateTotalCost(-100);
    }

    if (express.checked == false) {
        jsFrameworks.disabled = false;
        jsFrameworksLabel.style.color = "black";
        updateTotalCost(-100);
    }

    if (jsLibs.checked == false) {
        node.disabled = false;
        nodeLabel.style.color = "black";
        updateTotalCost(-100);
    }

    if (node.checked == false) {
        jsLibs.disabled = false;
        jsLibsLabel.style.color = "black";
        updateTotalCost(-100);
    }

});
