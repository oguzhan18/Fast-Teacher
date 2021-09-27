
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";
        document.getElementById("register_div").style.display="none";
        var user = firebase.auth().currentUser;
        if (user != null) {
            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "<iframe src='app.html'></iframe>";
        }
    } 
    else {
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
});

function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
    });


}

function logout() {
    firebase.auth().signOut().then(function () {
    }).catch(function (error) {});}

function showRegister()
{
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("register_div").style.display = "block";
}

function register()
{
    var userEmail = document.getElementById("reg_email_field").value;
    var userPass = document.getElementById("reg_password_field").value;

    
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: "+errorMessage);
      });
}