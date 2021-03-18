
let divComplet = document.getElementById("grupo-no");
let divPrincipal2 = document.getElementById("imgDog");
let divPrincipal = document.getElementById("imgDog2");
let si = document.getElementById("si");
let nel = document.getElementById("nel");
let no = document.getElementById("divNo");

window.onload = reproducir;

function reproducir () {
  song.src = ladrido[actualSong];
}

let ladrido = ["salamisound-5350478-powerful-growl-of-a-larger.mp3",
               "Perro chillando (NUEVOEXITO.ORG).mp3"];
let actualSong = 0;
let play = document.getElementById("nel"); 
    play.addEventListener("click", function(){
      song.play();
});


nel.addEventListener("click", function(){
 divPrincipal2.style.display = "block";
  divComplet.style.display = "none";
})
si.addEventListener("click", function(){
  divPrincipal.style.display = "block";
   divComplet.style.display = "none";
})
no.addEventListener("click", function(){
  if(actualSong >= ladrido.length - 1) {
    actualSong = 0;
}else{
    actualSong += 1
}
song.src = ladrido[actualSong];
song.play()
})
no.addEventListener("mouseover", function (){
    cambiarPosicion()
})
no.addEventListener("onfocus", function (){
  cambiarPosicion()
})

const cambiarPosicion = () => {
  const newCoords = generarNuevasCoordenadas()
  no.style.top = newCoords.newTop+"px";
  no.style.left = newCoords.newLeft+"px";
}


const generarNuevasCoordenadas = () => {
  const newTop = Math.random()*400;
  const newLeft = Math.random()*400;
  if(newTop > 1 && newLeft > 1) {
    return { newTop , newLeft }
  }else{
    return generarNuevasCoordenadas()
  }
}