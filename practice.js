var firebaseConfig = {
    apiKey: "AIzaSyAl_m4qhtdTOuZTn4m3OOXrViiYe-K2o4c",
    authDomain: "c94practice-17a1d.firebaseapp.com",
    databaseURL: "https://c94practice-17a1d-default-rtdb.firebaseio.com",
    projectId: "c94practice-17a1d",
    storageBucket: "c94practice-17a1d.appspot.com",
    messagingSenderId: "505899176700",
    appId: "1:505899176700:web:b82b571e6028589ebbfd79",
    measurementId: "G-C3H1NP3WN5"
};
firebase.initializeApp(firebaseConfig);

function adduser(){
    username = document.getElementById("username").value;
    firebase.database().ref("/").child(username).update({
        Purpose:"Adding User"
    });
}