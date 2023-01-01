// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDPOpq5cjuYxA5LrIw-aQdN_79f1s_T-VE",
    authDomain: "let-s-chat-a022c.firebaseapp.com",
    projectId: "let-s-chat-a022c",
    storageBucket: "let-s-chat-a022c.appspot.com",
    messagingSenderId: "972422595769",
    appId: "1:972422595769:web:789b857988dff83fd84768"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addUser(){
    username = document.getElementById("user_name").value;
    localStorage.setItem("user_name", username)
    window.location = "Kwitter_page.html";
}
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class='room_names' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>"
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
 getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Kwitter_page.html";
}