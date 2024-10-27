
//Toggle button

function togglebutton(){
    $('.sidebar,body').toggleClass('show');
}


//Form Validation
  document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.querySelector('form');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const country = document.getElementById('country');
    const zip = document.getElementById('zip');
    const cellPhone = document.getElementById('cellPhone');
    
    // Function to show error message
    function showError(input, message) {
      const formGroup = input.parentElement;
      const errorMsg = formGroup.querySelector('small');
      if (errorMsg) {
        errorMsg.textContent = message;
      } else {
        const small = document.createElement('small');
        small.textContent = message;
        small.style.color = 'red';
        formGroup.appendChild(small);
      }
    }

    // Function to clear error message
    function clearError(input) {
      const formGroup = input.parentElement;
      const errorMsg = formGroup.querySelector('small');
      if (errorMsg) {
        errorMsg.textContent = '';
      }
    }

    // Validate Email
    function validateEmail(input) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (re.test(input.value.trim())) {
        clearError(input);
        return true;
      } else {
        showError(input, 'Invalid email format');
        return false;
      }
    }

    // Validate Phone Number
    function validatePhone(input) {
      const phoneRe = /^\(\d{3}\)\s\d{3}-\d{4}$/;
      if (phoneRe.test(input.value.trim())) {
        clearError(input);
        return true;
      } else {
        showError(input, 'Phone number must be in format (###) ###-####');
        return false;
      }
    }

    // Validate required fields
    function validateRequired(input) {
      if (input.value.trim() === '') {
        showError(input, `${input.previousElementSibling.textContent} is required`);
        return false;
      } else {
        clearError(input);
        return true;
      }
    }

    // Form Submit Event Listener
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate required fields
      const isFirstNameValid = validateRequired(firstName);
      const isLastNameValid = validateRequired(lastName);
      const isEmailValid = validateEmail(email);
      const isAddressValid = validateRequired(address);
      const isCityValid = validateRequired(city);
      const isStateValid = validateRequired(state);
      const isCountryValid = validateRequired(country);
      const isZipValid = validateRequired(zip);
      const isPhoneValid = validatePhone(cellPhone);

      // If all fields are valid, submit the form
      if (isFirstNameValid && isLastNameValid && isEmailValid && isAddressValid && 
          isCityValid && isStateValid && isCountryValid && isZipValid && isPhoneValid) {
        alert('Form submitted successfully!');
        form.submit();  // Uncomment this line to actually submit the form
      } else {
        alert('Please correct the errors in the form.');
      }
    });
  });
