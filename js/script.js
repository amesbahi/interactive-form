
// Global variabls
var jobRoleSelection = document.getElementById("title");
var basicInfoSection = document.getElementsByClassName("basicinfo")[0];
var designSelection = document.getElementById("design");
var colorSelection = document.getElementById("color");
var activities = document.getElementsByClassName("activities")[0];
// console.log(jobRoleSelection);
// console.log(basicInfoSection);
// console.log(designSelection);
// console.log(colorSelection);
// console.log(colorSelection.selectedIndex);
 console.log(activities);
// console.log(colorSelection);
// console.log(document.getElementsByClassName("puns")[0]);

// Variable containing the payment select menu
var paymentOptions = document.getElementById("payment");
//console.log(paymentOptions.options[1]);
//console.log(paymentOptions);

// Variables containing Bitcoin, Paypal, and credit card information
var paypalInfo = document.getElementById("paypalinfo");
var bitcoinInfo = document.getElementById("bitcoininfo");
var creditCardInfo = document.getElementById("credit-card");
    
// When the page loads, give focus to the first text field.
window.onload = function() {
    document.getElementById("name").focus();
    /** The "Credit Card" payment option should be selected by default and result in the display 
    of the #credit-card div. When credit card option is selected by default, hide the Paypal and Bitcoin information **/
    var defaultSelectedPayment = paymentOptions.options[paymentOptions.selectedIndex] = paymentOptions.options[1];
    paypalInfo.style.display = "none";
    bitcoinInfo.style.display = "none";
}

/** When credit card option is selected by default, hide the Paypal and Bitcoin information
When Paypal or Bitcoin option is selected, display respective information **/
paymentOptions.addEventListener("change", function () {

    // The indexing appears to accord with order as displayed when select is prompted
    if (paymentOptions.options[paymentOptions.selectedIndex] == paymentOptions.options[1]) {
        paypalInfo.style.display = "block";
        bitcoinInfo.style.display = "none";
        creditCardInfo.style.display = "none";
    } 
    
    if (paymentOptions.options[paymentOptions.selectedIndex] == paymentOptions.options[2]) {
        bitcoinInfo.style.display = "block";
        paypalInfo.style.display = "none";
        creditCardInfo.style.display = "none";
    } 
    
    if (paymentOptions.options[paymentOptions.selectedIndex] == paymentOptions.options[0]) {
        creditCardInfo.style.display = "block";
        paypalInfo.style.display = "none";
        bitcoinInfo.style.display = "none";
    }
});

// "Job Role" section of the form: reveal a text field when the "Other" option is selected from the "Job Role" drop down menu
jobRoleSelection.addEventListener("change", function () {

    // Variable containing the selecting job role from the job role dropdown
    var selectedJobRole = jobRoleSelection.options[jobRoleSelection.selectedIndex].value;
    //console.log(selectedJobRole);

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
    //console.log(selectedDesign);

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

    // If the workshops that do not have a time conflict are checked, update the total cost
    if (main.checked == true) {
        totalCost += 200;
    }

    if (buildTools.checked == true) {
        totalCost += 100;
    }

    if (npm.checked == true) {
        totalCost += 100;
    }

    // If a workshop is selected that conflicts with another, disable the other
    // As a user selects activities to register for, a running total is listed below the list of checkboxes
    if (jsFrameworks.checked == true) {
        express.disabled = true;
        expressLabel.style.color = "grey";
        totalCost += 100;
    } else if (express.checked == true) {
        jsFrameworks.disabled = true;
        jsFrameworksLabel.style.color = "grey";
        totalCost += 100;
    }

    if (jsLibs.checked == true) {
        node.disabled = true;
        nodeLabel.style.color = "grey";
        totalCost += 100;
    } else if (node.checked == true) {
        jsLibs.disabled = true;
        jsLibsLabel.style.color = "grey";
        totalCost += 100;
    }

    // Update the cost each time a workshop is selected
    document.getElementById("totalcost").innerHTML = "Total: $ " + totalCost;

    // If a workshop that conflicted with another is deselected, reenable the disabled, conflicting workshop
    if (jsFrameworks.checked == false) {
        express.disabled = false;
        expressLabel.style.color = "black";
    }

    if (express.checked == false) {
        jsFrameworks.disabled = false;
        jsFrameworksLabel.style.color = "black";
    }

    if (jsLibs.checked == false) {
        node.disabled = false;
        nodeLabel.style.color = "black";
    }

    if (node.checked == false) {
        jsLibs.disabled = false;
        jsLibsLabel.style.color = "black";
    }

});

// Form validation: display error messages and don't let the user submit the form if any of these validation errors exist:
// Name field can't be empty
var nameField = document.getElementById("name"); // global variables
//console.log(nameField);
var submitButton = document.getElementById("submit");
//console.log(submitButton);
var nameLabel = document.getElementById("name-label");
//console.log(nameLabel);
var emailLabel = document.getElementById("email-label")
// Validate email format
// Method to validate email format
var emailField = document.getElementById("mail");
// Activities label
var activityLabel = document.getElementById("activities-label");
// Activity checkboxes
var checkboxes = document.querySelectorAll(".activities input");
console.log(checkboxes);

// Validation functions
function validateEmail(emailString) {
    var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailFormat.test(emailString);
    }

function validateName(name) {
    return name !== "";
}

/*function validateActivity(activity) {
    for (var i = 0; i < checkboxes.length; i++) {
        var checkedCheckbox = checkboxes[i].checked;
        console.log(checkedCheckbox);
        if (!checkedCheckbox) {
            return false;
        }
    }
}*/

// Event listener to validate fields upon selecting submit button
submitButton.addEventListener("click", function(event) {

function validateActivity(activity) {
    var checkCount = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkCount++;
        }
    }
    if (checkCount < 1) {
        return false;
    }
    return true;
}

console.log(event);
console.log("emailvalidate is", validateEmail(emailField.value));
console.log(emailLabel.children);

    if (!validateEmail(emailField.value)) {
        event.preventDefault();
        if (emailLabel.children.length < 1) {
            var emailErrorMessage = document.createElement("p");
            emailErrorMessage.innerHTML = "Please enter a valid email address.";
            emailErrorMessage.style.color = "red";
            emailLabel.appendChild(emailErrorMessage);
        }
    } else if (emailLabel.children.length >= 1) {
        emailLabel.removeChild(emailLabel.children[0]);
    }

    if (!validateName(nameField.value)) {
        event.preventDefault();
        if (nameLabel.children.length < 1) {
            var nameErrorMessage = document.createElement("p");
            nameErrorMessage.innerHTML = "Please enter your name.";
            nameErrorMessage.style.color = "red";
            //console.log(nameErrorMessage);
            nameLabel.appendChild(nameErrorMessage);
            //console.log(validateEmail("test@gmail.com"));
        }
    } else if (nameLabel.children.length >= 1) {
        nameLabel.removeChild(nameLabel.children[0]);
    }

    // At least one activity must be checked from the list under "Register for Actitivities."
    if (!validateActivity(checkboxes)) {
        event.preventDefault();
        if (activityLabel.children.length < 1) {
            var activityErrorMessage = document.createElement("p");
            activityErrorMessage.innerHTML = "Please select at least one activity.";
            activityErrorMessage.style.color = "red";
            activityLabel.appendChild(activityErrorMessage);
        } else if (activityLabel.children.length >= 1) {
            activityLabel.removeChild(activityLabel.children[0]);
        }   
    }

});


