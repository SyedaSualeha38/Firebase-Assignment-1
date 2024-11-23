// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js&quot;

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANbtwX_MoekD2QT6uzxNyvwnCI5mT2Mt4",
    authDomain: "web-app-54b9c.firebaseapp.com",
    projectId: "web-app-54b9c",
    storageBucket: "web-app-54b9c.firebasestorage.app",
    messagingSenderId: "636857898317",
    appId: "1:636857898317:web:4da873848a2cb58f0d9304",
    measurementId: "G-KH0RWCTW41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Initialize Analytics
const auth = getAuth();


document.getElementById('loginButton')?.addEventListener('click', signin);

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('signupButton')?.addEventListener('click', signup);
  document.getElementById('loginButton')?.addEventListener('click', signin);
});



// Signup Function
function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if both fields are filled
  if (email === '' || password === '') {
    alert('Please fill out both email and password fields.');
    return;
  }

  // Optional: Add more password validation (e.g., length, special characters)
  if (password.length < 6) {
    alert('Password should be at least 6 characters long.');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log('User signed up:', user);
      alert('Sign up successful! Welcome, ' + user.email);
      window.location.pathname = 'signin.html'
    })
    .catch((error) => {
      // Handle sign-up errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing up:', errorCode, errorMessage);

      // Display a user-friendly error message
      alert('Error: ' + errorMessage);
    });
}

// Attach event listener to button
document.getElementById('signupButton')?.addEventListener('click', signup);

function signin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if both fields are filled
  if (email === '' || password === '') {
    alert('Please fill out both email and password fields.');
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('Signed in successfully: ', user)
    alert('Logged in...')
    sessionStorage.setItem("user", user.email);
    window.location.pathname = 'index.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error during login:', errorCode, errorMessage);
    alert('Error: ' + errorMessage);  // Display the error to the user
  });
  
}

