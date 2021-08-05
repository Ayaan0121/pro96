//ADD YOUR FIREBASE LINKS HERE
// My web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBUVE1OICIWR_h9ezdKviGoMNXQT79y62A",
      authDomain: "kwitter-1e0c4.firebaseapp.com",
      databaseURL: "https://kwitter-1e0c4-default-rtdb.firebaseio.com",
      projectId: "kwitter-1e0c4",
      storageBucket: "kwitter-1e0c4.appspot.com",
      messagingSenderId: "571698137549",
      appId: "1:571698137549:web:1f798e468e89ac2f4adc84"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

    room_name=localStorage.getItem("room_name");

//fun send

    function send() {
          
    msg=document.getElementById("msg").value

    firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
    });

document.getElementById("msg").value="";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

//fun logout

function logout() {
      localStorage.removeItem("user_name");
    
      localStorage.removeItem("room_name");
    
      window.location="index.html";
    }