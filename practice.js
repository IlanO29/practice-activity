var firebaseConfig = {
    apiKey: "AIzaSyAOmIZaHX7Y5-KQ1zO637gl2hJhR_voKL8",
    authDomain: "classtest-a9b8c.firebaseapp.com",
    databaseURL: "https://classtest-a9b8c-default-rtdb.firebaseio.com",
    projectId: "classtest-a9b8c",
    storageBucket: "classtest-a9b8c.appspot.com",
    messagingSenderId: "142369870036",
    appId: "1:142369870036:web:f08d20b54420f5bf00ab41",
    measurementId: "G-8Y30PG9HMQ"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

function addUser() {
    user_name  =document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}
