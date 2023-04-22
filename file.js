// Get form element by ID
var form = document.getElementById("myForm");

// Add event listener for form submission
form.addEventListener("submit", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get input values
  var name = document.getElementById("name").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var age = document.getElementById("age").value;

  // Validate name field
  if (name === "") {
    alert("Name field cannot be empty");
    return;
  }
  // Validate name to contain characters only
  if (!/^[a-zA-Z]+$/.test(name)) {
    alert("Name can only contain characters");
    return;
  }

  // Validate phone number field
  if (phoneNumber === "") {
    alert("Phone number field cannot be empty");
    return;
  }
  // Validate phone number to be in valid format
  if (!/^\d{10}$/.test(phoneNumber)) {
    alert("Phone number should be 10 digits");
    return;
  }

  // Validate age field
  if (age === "") {
    alert("Age field cannot be empty");
    return;
  }
  // Validate age to not be negative
  if (parseInt(age) < 0) {
    alert("Age cannot be negative");
    return;
  }

  // If all validations pass, submit the form
  form.submit();
});
