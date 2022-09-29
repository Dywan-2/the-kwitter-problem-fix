//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyDYHxWLdHtBVIVGvd2jdbJFNPqZyotuuP8",
      authDomain: "kwitter-37afc.firebaseapp.com",
      databaseURL: "https://kwitter-37afc-default-rtdb.firebaseio.com",
      projectId: "kwitter-37afc",
      storageBucket: "kwitter-37afc.appspot.com",
      messagingSenderId: "646286826222",
      appId: "1:646286826222:web:27bb218dc12744fbcc31ff"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
room_name1=localStorage.getItem("rname");
User_name=localStorage.getItem("Uname");
function send(){
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name1).push({
            name:User_name,
            message:msg,
            like:0
      });
      document.getElementById("message").value="";
}
function logout(){
      localStorage.removeItem("room_name1")
      localStorage.removeItem("User_name")
      window.location="index.html";
}