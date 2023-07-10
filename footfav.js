function iniciar_sesion(){
    usuario_1=document.getElementById("usuario").value
    localStorage.setItem("name",usuario_1)
    window.location="footfav_room.html"

    }