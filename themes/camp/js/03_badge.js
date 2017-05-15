// database
var database = firebase.database(),
    auth = firebase.auth();

// ---- Selectors for login ----
var loginButton = document.getElementById('loginButton');

// ---- Selectors for registration ----
var registerButton = document.getElementById('');

function writeUserData(userId, name, email, imageUrl) {
    database.ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
    });
}

// auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

function login() {
    console.log('clicked login!');
    writeUserData('booty', 'Kyle Bacon', 'piratel3acon@gmail.com', 'testing');
}

function createUser() {
    console.log('clicked register!');
    // writeUserData('booty', 'Kyle Bacon', 'piratel3acon@gmail.com', 'testing');
}

// ---- Click Handlers ---
loginButton.addEventListener('click', login);
