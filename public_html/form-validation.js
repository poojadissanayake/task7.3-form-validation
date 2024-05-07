function validation() {
    event.preventDefault();

    let isValid = true;
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let unit = document.getElementById("unit");
    let phone = document.getElementById("phone");

    let emailRegex = /^[a-zA-Z0-9._%+-]+@deakin\.edu\.au$/;
    let unitRegex = /^[a-zA-Z]{3}\d{3}$/;
    let phoneRegex = /^\d{10}$/;

    // Isolate non-digits
    let nonDigits = phone.value.replace(/\d/g, '');
    // '\d' is a shorthand character class that stands for any digit (0-9)
    // '/g' a flag in regular expressions that stands for "global". 
    // When the global flag is used, the regular expression engine tries to find all matches in the string, 
    // rather than stopping after the first match

    // Reset error messages
    document.getElementById("name-validity").innerHTML = '';
    document.getElementById("email-validity").innerHTML = '';
    document.getElementById("unit-validity").innerHTML = '';
    document.getElementById("phone-validity").innerHTML = '';

    // Name validation
    if (!name.value.trim()) {
        document.getElementById("name-validity").innerHTML = "Name is required.";
        document.getElementById("name-validity").classList.add("text-danger");
        isValid = false;
    } else {
        document.getElementById("name-validity").innerHTML = "Valid!";
        document.getElementById("name-validity").classList.remove("text-danger");
        document.getElementById("name-validity").classList.add("text-success");
    }

    // Email validation
    if (!email.value.match(emailRegex)) {
        document.getElementById("email-validity").innerHTML = "Email must be a valid Deakin email.";
        document.getElementById("email-validity").classList.add("text-danger");
        isValid = false;
    } else {
        document.getElementById("email-validity").innerHTML = "Valid!";
        document.getElementById("email-validity").classList.remove("text-danger");
        document.getElementById("email-validity").classList.add("text-success");
    }

    // Unit validation
    if (!unit.value.match(unitRegex)) {
        document.getElementById("unit-validity").innerHTML = "Unit code must be 3 letters followed by 3 numbers.";
        document.getElementById("unit-validity").classList.add("text-danger");
        isValid = false;
    } else {
        document.getElementById("unit-validity").innerHTML = "Valid!";
        document.getElementById("unit-validity").classList.remove("text-danger");
        document.getElementById("unit-validity").classList.add("text-success");
    }

    // Validate phone number
    if (!phone.value.match(phoneRegex)) {
        let errorMessage = "Phone number must be exactly 10 digits.";
        if (nonDigits.length > 0) {
            errorMessage += ` Invalid characters: ${nonDigits}.`;
        }
        document.getElementById("phone-validity").innerHTML = errorMessage;
        document.getElementById("phone-validity").classList.add("text-danger");
        isValid = false;
    } else {
        document.getElementById("phone-validity").innerHTML = "Valid!";
        document.getElementById("phone-validity").classList.remove("text-danger");
        document.getElementById("phone-validity").classList.add("text-success");
    }

    if (isValid) {
        // Only submit form if all validations pass
        document.getElementById("formValidation").submit();
    }
}

function reset() {
    // Reset error messages
    document.getElementById("name-validity").innerHTML = '';
    document.getElementById("email-validity").innerHTML = '';
    document.getElementById("unit-validity").innerHTML = '';
    document.getElementById("phone-validity").innerHTML = '';
}
resetBtn.addEventListener('click', reset);