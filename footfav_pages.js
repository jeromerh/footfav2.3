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

   function send(){
    mensaje=document.getElementById("msg").value
    firebase.database().ref(sala).push({
        name:usuario1,message:mensaje,like:0
    })
    document.getElementById("msg").value=""
   }

   function logout(){
    localStorage.removeItem("name")
    localStorage.removeItem("sala")
    window.location.replace("index.html")
   }
  
   function getData() {
    firebase.database().ref("/" + sala).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";


                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}
getData();


function updateLike(message_id) {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    
    firebase.database().ref(sala).child(message_id).update({
        like: updated_likes
    });


}