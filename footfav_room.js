var firebaseConfig = {
    apiKey: "AIzaSyCIGfDPX_pvLCH8MywVMrWlc1-t11MdoCQ",
    authDomain: "footfavorite-722c2.firebaseapp.com",
    databaseURL: "https://footfavorite-722c2-default-rtdb.firebaseio.com",
    projectId: "footfavorite-722c2",
    storageBucket: "footfavorite-722c2.appspot.com",
    messagingSenderId: "50469935947",
    appId: "1:50469935947:web:b6ab3dcf2d5dad3ef226ce"
  };
  
 
  firebase.initializeApp(firebaseConfig);

   usuario1=localStorage.getItem("name")

   sala=localStorage.getItem("sala")

   document.getElementById("username").innerHTML="hola" + usuario1 + "bienvenido"

   function addroom(){
    nombre_sala=document.getElementById("room_name").value
    firebase.database().ref("/").child(nombre_sala).update({
     purpose: "añadiendo nombre de sala"     
    })
    localStorage.setItem("sala",nombre_sala)
    window.location.replace("footfav_pages.html")
   }

function getData() 

{firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";

snapshot.forEach(function(childSnapshot)
 
{childKey  = childSnapshot.key;
   
     Room_names = childKey;
    
    row= "<div class='room_name' id=" + Room_names+ "onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div> <hr>"; 
    document.getElementById("outpot").innerHTML += row;
    
    });});}
getData();

function logout(){
    localStorage.removeItem("name")
    localStorage.removeItem("sala")
    window.location("index.html")
}

function redirectToRoomName(name){ console.log(name) 

localStorage.setItem("sala", nombre_sala);

window.location ="footfav_pages.html" }