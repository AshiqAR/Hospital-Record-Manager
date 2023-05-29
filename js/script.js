function displayRoleDropdown() {
    document.getElementById("roleDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('#signInOrSignUp')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function clicked(role) {
    if (role == 'Home') {
        console.log("home");
        window.location.href = 'index.html';
    }
    else {
        if (role == 'Patient') {
            console.log('patient');
            window.location.href = 'loginScreen.html';
        }
    }
}