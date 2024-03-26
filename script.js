//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the element with id "level"
    var targetElement = document.getElementById("level");

    // Function to calculate the DOM level of an element
    function calculateDOMLevel(element) {
        var level = 0; // Initialize the level count

        // Traverse up the DOM tree until reaching the root element (html)
        while (element !== null) {
            level++; // Increment the level count
            element = element.parentElement; // Move to the parent element
        }

        return level; // Return the calculated level
    }

    // Calculate the DOM level of the target element
    var domLevel = calculateDOMLevel(targetElement);

    // Display the result using the alert() function
    alert("The level of the element is: " + domLevel);
});
