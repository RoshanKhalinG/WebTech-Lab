function btn_actn() {
    var username = document.getElementById("id").value;
    var password = document.getElementById("pw").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    window.location.href = "index33.html";  
}
