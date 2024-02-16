document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var foods = document.querySelectorAll('input[name="food"]:checked');
    var selectedFoods = [];
    foods.forEach(function(food) {
      selectedFoods.push(food.value);
    });
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
  
    // Append values to the table
    var tableBody = document.getElementById('tableBody');
    var newRow = tableBody.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = selectedFoods.join(', ');
    cell7.innerHTML = state;
    cell8.innerHTML = country;
  
    // Clear form fields
    document.getElementById('form').reset();
  });
  