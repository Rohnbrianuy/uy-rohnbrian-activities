function register() {
    var user = document.getElementById("user").value;
    var name = document.getElementById("name").value;
    var gender = document.getElementById("genders").value;
    var pass = document.getElementById("pass").value;

    if (user === "" || name === "" || genders === "" || pass === "") {
        document.getElementById("failed").innerHTML = "All textboxes is required";
    }
    else {
        document.getElementById("failed").innerHTML = "Registered successfully";
    }
}
