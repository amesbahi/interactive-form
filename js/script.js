
// When the page loads, give focus to the first text field.
window.onload = function() {
    document.getElementById("name").focus();
}

// Global variabls
var jobRoleSelection = document.getElementById("title");
var basicInfoSection = document.getElementsByClassName("basicinfo")[0];
var designSelection = document.getElementById("design");
var colorSelection = document.getElementById("color");
var hiddenColorOptions = [];
console.log(jobRoleSelection);
console.log(basicInfoSection);
console.log(designSelection);
console.log(colorSelection);

// "Job Role" section of the form: reveal a text field when the "Other" option is selected from the "Job Role" drop down menu
document.getElementById("title").addEventListener("change", function () {

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
document.getElementById("design").addEventListener("change", function () {

    // Variable containing the selected option from design
    var selectedDesign = designSelection.options[designSelection.selectedIndex].value;
    console.log(selectedDesign);

    // Variables holding the specific custom design options
    var jsPuns = document.getElementById("design").options[value="js puns"];
    var iHeartJs = document.getElementById("design").options[value="heart js"];
    console.log(jsPuns);
    console.log(iHeartJs);

    // Depending on which design is selected, display the matching colors and hide the colors that do not match design
   if (selectedDesign === jsPuns) {
       // variable containing the color options to show
       //document.getElementById("color").options[value="cornflowerblue, darkslategrey, gold"].style.display = 'block';
       // revision of line 53
       /*var showColors = document.getElementsByClassName("puns");
       showColors.style.display = 'block';*/
       // variable containing the color options to hide
       //document.getElementById("color").options[value="tomato, steelblue, dimgrey"].style.display = 'none';
       // revision of line 57
       var hideColors = document.getElementsByClassName("heart");
       hideColors.style.display = 'none';
   }

});