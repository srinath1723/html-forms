
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const tableBody = document.getElementById("dataTable");

     form.addEventListener("submit", function(event) {
    event.preventDefault();
    // Get form values
    const firstName = form.elements["first-name"].value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var foods = document.querySelectorAll('input[name="food"]:checked');
    var foodValues = [];
    foods.forEach(function(food) {
        foodValues.push(food.value);
    });
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    // Create a new row in the table
    const newRow = tableBody.insertRow();
  
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = email;
    cell4.innerHTML = address;
    cell5.innerHTML = pincode;
    cell6.innerHTML = gender;
    cell7.innerHTML = foodValues.join(", ");
    cell8.innerHTML = state;
    cell9.innerHTML = country;

    // Clear the form fields
    form.reset();
});
});