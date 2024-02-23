let popupContenedor = document.getElementById("popupContenedor");
let popup = document.getElementById("popup");

function abrir(opciones) {
  switch (opciones) {
    case "formacion":
      popupContenedor.innerHTML = `<div id="popup" class="popup">
           <div id="popupHijo" class="popupHijo">
                <p>
                     En este momento me encuentro finalizando el curso de Confeccion y
               publicacion de páginas Web con una duracion total 578 horas, e
               impartido en el centro de formacion para el empleo de Ames.
               <br />Soy Diplomada en Graduado Social por la Universidad de
                Santiago de Compostela; estudios que cursé entre los años 1991 y
               1994. <br />
              Entre los años 1996 y 1997 realicé un curso de especializacion
             laboral impartido en la misma universidad.
                  </p>
  <button onclick="cerrar()" id="cerrar" class="cerrar">X</button> 
</div>
</div> `;
      break;
    case "sobremi":
      popupContenedor.innerHTML = ` <div id="popup" class="popup">
     <div id="popupHijo" class="popupHijo">
         <p>
         Naci en 1972, en Rianxo. Siempre fuí una persona inquieta e imaginativa con ganas de aprender. Estuve trabajando varios años
             como asesora laboral. Con el paso del tiempo y tras algunos
             problemas de salud decidí que era el momento de experimentar y
             caminar por nuevos caminos. <br />
             Esos nuevos caminos me han traido hasta aquí el mundo del diseño y las nuevas tecnologias, tema que me apasiona y que me da una vision
             distinta de lo que me rodea.
 <button onclick="cerrar()" id="cerrar" class="cerrar">X</button>
 </div>
             </div>`;
      break;
    case "contacto":
      popupContenedor.innerHTML = ` <div id="popup" class="popup">
                <div id="popupHijo" class="popupHijo">
                 <h4 class="datosContacto">
                Mail: villanustre@hotmail.es <br>
                Tlf: 658 547080
              </h4>
              <button onclick="cerrar()" id="cerrar" class="cerrar">X</button>
                </div>
                </div>`;
      break;
    case "Conocimientos":
      popupContenedor.innerHTML = `<div id="popup" class="popup">
    <div id="popupHijo" class="popupHijo">
          <div id="conocimientos">
        <img src="assets/icono boostrapp.jfif" width="90px" height="90px" alt="Icono de aplicacion boostrapp">
        <img src="assets/iconocss.png" width="90px" height="90px" alt="Icono de CSS">
        <img src="assets/iconoHTML.png" width="150px" height="110px" alt="Icono de HTML">
        <img src="assets/iconojava.jfif" width="90px" height="90px" alt="Icono de JavaScript">
              </div>
    <button onclick="cerrar()" id="cerrar" class="cerrar">X</button>
      </div>
      </div> `;
      break;
    default:
      break;
  }
}

function cerrar() {
  let popup = document.getElementById("popup");
  popup.remove();
}
