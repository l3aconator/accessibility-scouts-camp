// ---- Global vars for the authentication script ----
var auth = firebase.auth(),
    database = firebase.database(),
    loginForm = document.getElementById('login'),
    registerForm = document.getElementById('register'),
    settingsEmailForm = document.getElementById('settingsEmail'),
    settingsPasswordForm = document.getElementById('settingsPassword'),
    formField = document.getElementsByClassName('form-field'),
    signIn = document.getElementById('quickstart-sign-in'),
    signInStatus = document.getElementById('quickstart-sign-in-status'),
    headerLoginStatus = document.getElementById('js-headerLoginStatus'),
    headerUsername = document.getElementById('js-username'),
    signUp = document.getElementById('quickstart-sign-up'),
    signUpStatus = document.getElementById('quickstart-sign-up-status'),
    passwordReset = document.getElementById('quickstart-password-reset'),
    accountDetails = document.getElementById('quickstart-account-details'),
    headerLogin = document.getElementById('js-headerLogin'),
    headerLogout = document.getElementById('js-headerLogout'),
    headerLogoutButton = document.getElementById('js-headerLogoutButton'),
    verifyEmail = document.getElementById('quickstart-verify-email'),
    badgeManualAuth = document.getElementById('js-badgeAuth'),
    badgeManualNoAuth = document.getElementById('js-badgeNoAuth'),
    settingsAuth = document.getElementById('js-settingsAuth'),
    changeEmailInput = document.getElementById('changeEmail'),
    changeEmailReset = document.getElementById('quickstart-email-reset'),
    changePasswordEmailInput = document.getElementById('email');

// ---- Prevent form submission ----
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
}

if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
}

if (settingsEmailForm) {
    settingsEmailForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
}

if (settingsPasswordForm) {
    settingsPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
}

// ---- Handles the sign in button press. ----
function toggleSignIn() {

    if (auth.currentUser) {
        // [START signout]
        auth.signOut();
        // [END signout]
    } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }

        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        auth.signInWithEmailAndPassword(email, password).then(function(result) {
            window.location = '/badge-manual'
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            signIn.disabled = false;
            // [END_EXCLUDE]
        });
        // [END authwithemail]
    }

    signIn.disabled = true;
}

function toggleLogout() {
    if (auth.currentUser) {
        // [START signout]
        auth.signOut();
        headerLogin.classList.remove('hidden');
        headerLogout.classList.add('hidden');
        badgeManualAuth.classList.add('hidden');
        badgeManualNoAuth.classList.remove('hidden');
        // [END signout]
    } else {

    }
}

// ---- Handles the sign up button press. ----
function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    auth.createUserWithEmailAndPassword(email, password).then(function(result) {
        window.location = '/badge-manual'
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END createwithemail]
}

// ---- Sends an email verification to the user. ----
function sendEmailVerification() {
    // [START sendemailverification]
    auth.currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
    });
    // [END sendemailverification]
}

function sendPasswordReset() {
    var email = document.getElementById('email').value;

    // [START sendpasswordemail]
    auth.sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
            alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
            alert(errorMessage);
        }

        console.log(error);
        // [END_EXCLUDE]
    });
    // [END sendpasswordemail];
}

function updateEmail() {
    var email = changeEmailInput.value;
    auth.currentUser.updateEmail(email).then(function() {
        // Email updated!
        // [START_EXCLUDE]
        alert('Email updated');
        // [END_EXCLUDE]
    }, function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
            alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
            alert(errorMessage);
        }

        console.log(error);
        // [END_EXCLUDE]
    });
}

/**
* initApp handles setting up UI event listeners and registering Firebase auth listeners:
*  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
*    out, and that is where we update the UI.
*/
function initApp() {

    // Listening for auth state changes.
    // [START authstatelistener]
    auth.onAuthStateChanged(function(user) {

        // [START_EXCLUDE silent]
        if(verifyEmail) {
            verifyEmail.disabled = true;
        }
        // [END_EXCLUDE]

        if (user) {
            // ---- User is signed in. ----
            var displayName = user.displayName;
            var email = user.email;
            var badge = user.badge;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            function writeUserData(userId, email) {

                database.ref('users/' + userId).set({
                    email: email
                });
            }

            writeUserData(uid, email);

            var starCountRef = database.ref('users/' + uid + '/badge');
            starCountRef.on('value', function(snapshot) {
                console.log(snapshot.val());
            });

            // [CUSTOM HEADER FOR USER]
            headerLogin.classList.add('hidden');
            headerLogout.classList.remove('hidden');

            if (badgeManualAuth) {
                badgeManualAuth.classList.remove('hidden');
                badgeManualNoAuth.classList.add('hidden');
            }

            settingsAuth.classList.remove('hidden');

            if (headerUsername) {
                headerUsername.textContent = (displayName == 'null' ?  displayName : 'scout');
            }

            // [START_EXCLUDE]
            if (signIn) {
                signInStatus.textContent = 'Great to see you, scout.';
                signIn.textContent = 'Sign out of my account »';

                for (var i = 0; i < formField.length; ++i) {
                    var item = formField[i];
                    item.classList.add('hidden');
                }
            }

            if (signUp) {

                signUpStatus.textContent = 'Great to see you, scout.';
                signUp.textContent = 'Sign out of my account »';

                for (var i = 0; i < formField.length; ++i) {
                    var item = formField[i];
                    item.classList.add('hidden');
                }
            }

            if (accountDetails) {
                accountDetails.textContent = JSON.stringify(user, null, '  ');
            }

            if (!emailVerified) {

                if (verifyEmail) {
                    verifyEmail.disabled = false;
                }
            }
            // [END_EXCLUDE]

            if (changePasswordEmailInput) {
                changePasswordEmailInput.setAttribute('value', email);
            }

        } else {

            // ---- User is signed out. ----
            // [START_EXCLUDE]
            if (signIn) {
                signInStatus.textContent = 'Login to your account, scout!';
                signIn.textContent = 'Login to my account »';
                signIn.disabled = false;

                for (var i = 0; i < formField.length; ++i) {
                    var item = formField[i];
                    item.classList.remove('hidden');
                }
            }

            if (signUp) {
                signUpStatus.textContent = 'Create your account, scout!';
                signUp.textContent = 'Create my account »';
            }

            if (accountDetails) {
                accountDetails.textContent = 'null';
            }

            // Reset to login partial once user is logged out
            headerLogin.classList.remove('hidden');

            if (badgeManualAuth) {
                badgeManualAuth.classList.add('hidden');
                badgeManualNoAuth.classList.remove('hidden');
            }

            settingsAuth.classList.add('hidden');
            // [END_EXCLUDE]

        }
    });
    // [END authstatelistener]

    // ----  Click handlers ----
    if (signIn) {
        signIn.addEventListener('click', toggleSignIn, false);
    }

    if (signUp) {
        signUp.addEventListener('click', handleSignUp, false);
    }

    if (verifyEmail) {
        verifyEmail.addEventListener('click', sendEmailVerification, false);
    }

    if (passwordReset) {
        passwordReset.addEventListener('click', sendPasswordReset, false);
    }

    if (changeEmailReset) {
        changeEmailReset.addEventListener('click', updateEmail, false);
    }

    if (headerLogout) {
        headerLogout.addEventListener('click', toggleLogout, false);
    }
}

window.onload = function() {
    initApp();
};


// TODO: Hook up toogleNightMode to database to save preference in firebase

// manuals: {
//     sightManual: {
//         badgesEarned: [badges]
//     },
//     audioManual: {
//         badgesEarned: [badges]
//     },
//     touchManual: {
//         badgesEarned: [badges]
//     },
//     aboutManual: {
//         badgesEarned: [badges]
//     },
//     badgeManual: {
//         badgesEarned: [badges]
//     },
//     miscManual: {
//         badgesEarned: [badges]
//     }
// }
