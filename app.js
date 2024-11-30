
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";




    const firebaseConfig = {
      apiKey: "AIzaSyBj3Szw9LmGNSjdgrM3AylyrkHLe_KZGNU",
      authDomain: "online-classes-9dd3c.firebaseapp.com",
      projectId: "online-classes-9dd3c",
      storageBucket: "online-classes-9dd3c.firebasestorage.app",
      messagingSenderId: "72668153771",
      appId: "1:72668153771:web:93d5dabea4ff6345ccb4ee",
      measurementId: "G-X1LXVHDPZF"
    };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  




// Optional JS to handle "Continue" button click
function continueLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email && password) {
      alert('Form submitted successfully');
      // Here, you can add logic to submit the form or validate the credentials
    } else {
      alert('Please fill in both fields');
    }
  }
  // Continue login function
function continueLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Check if email and password are provided
    if (email && password) {
      // Use Firebase to sign in the user
      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // User signed in successfully
          const user = userCredential.user;
          console.log("User signed in:", user);
          // Redirect to the next page (e.g., homepage or dashboard)
          window.location.href = "dashboard.html";  // Change to your target page
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error signing in:", errorCode, errorMessage);
          alert("Error signing in: " + errorMessage);
        });
    } else {
      alert("Please enter your email and password.");
    }
  }
  
