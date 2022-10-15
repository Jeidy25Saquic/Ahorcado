var inicioBoton=document.querySelector(".inicio");
  var body=document.querySelector("body");
  var palabraNueva=document.querySelector(".palabra");
  var ahorcado=document.querySelector(".ahorcadoEspacio");
  var mostrarPalabra= document.getElementById("mostrarPalabras");
  var mostrarLetrasUsadas= document.getElementById("mostrarLetrasUsadas");
  var perdio=document.getElementById("partidaPerdida");
  var gano=document.getElementById("partidaGanada");
  var mostar=document.getElementById("Perdida")
  var palabraSelecta=[];
  var aciertos=0;
  var errores=0;
  var letrasUsadas=[];
  var palabras=['programacion', 'diseño', 'ahorcado','java','github','MachingLearning','oracle','Midnigth']

  var letraAcertada=false;


  comienzo();


  function comienzo(){
    ahorcado.style.display="none";
    perdio.style.display="none";
    gano.style.display="none";
    mostar.style.display="none";
  
  }

  
  function iniciarJuego(){
    
      cambiosEstilo()
      dibujar()
      selecPalabraRandom  ()
    dibujarPalabra()
      ahorcado.style.display=''; //Element not be displayed
      document.addEventListener('keydown', obtenerLetra );
  }



  function nuevoJuego(){
    
      reset()
      cambiosEstilo()
      dibujar()
      selecPalabraRandom  ()
      dibujarPalabra()
      ahorcado.style.display=''; //Element not be displayed
      document.addEventListener('keydown', obtenerLetra );
  }
  function dibujar(){
      pincel.clearRect(0,0, pantalla.width,pantalla.height);
      pincel.fillStyle= "#1F7B67	"// caracteristica 
      
      pincel.fillRect(80, 0, 250, 5);
      pincel.fillRect(80,0, 5, 340);
      pincel.fillRect(0, 340, 400, 6);
      pincel.fill();
      /* pincel.fillRect(294,15 , 100, 100);*/
    
      
  }
    
  
  function desistir(){
    var titulo=document.querySelector(".titulo");
      var encabezado=document.querySelector(".Encabezado");
      var nombre=document.querySelector(".nombre");
      inicioBoton.style.display='' //Element will not be displayed
      palabraNueva.style.display='';
      body.classList.toggle('fondo')
      encabezado.classList.toggle('Encabezado2');
      titulo.classList.toggle('titulo2');
      nombre.classList.toggle('nombre2');
    
    ahorcado.style.display="none";
    guardar.style.display="none"
    salir.style.display="none"
    text.style.display="none"
   
    reset();
    mostrarLetrasUsadas.innerHTML='';
    endGame();
  }
  function selecPalabraRandom  () {
      var palabraRandom= palabras[Math.floor((Math.random()*palabras.length))];
    
      palabraSelecta= palabraRandom.split('');
      /*¨split nos separa por segmentos un array depencdeidno el simbolo en este caso es sin ningun espaciamiento puiede ser un simbolo especifico*/
    /*alert(palabraSelecta)*/
    
      
      
      } 
      var letrasUsadas=[];
      
      function obtenerLetra ( event)  {
      
          let newLetter = event.key.toUpperCase();
          if(newLetter.match(/^[a-zñ]$/i) && !letrasUsadas.includes(newLetter)) {
          
              compararLetra(newLetter);
          }
        
      }


      function compararLetra(letra){
        letra.toUpperCase();
      var palabrita=  palabraSelecta.toString().toUpperCase();
        if(palabrita.includes(letra)){
          letraCorrecta(letra) 
        } else{
          letraIncorrecta()
        
        }
        añadirLetraUsada(letra);
        letrasUsadas.push(letra);
      
      }

      function añadirLetraUsada(letra)  {
          var usadas = document.createElement('p');
          usadas.innerHTML = letra.toUpperCase();
          mostrarLetrasUsadas.appendChild(usadas);
      }
      


        function letraIncorrecta(){
          errores++;
        
        añadirPartesMuñeco(errores);
        if(errores==7){
          perdio.style.display='';
          Palabra();
          mostar.style.display='';
          endGame();
        }
        }

        function letraCorrecta(letra)  {
          // como usamos  mostrarPalabra.appendChild(letraContenida);  ahora vamos a mostrar las letras correctas com
          const { children } =   mostrarPalabra;
          for(let i = 0; i < children.length; i++) {
              if(children[i].innerHTML === letra) {
                  children[i].classList.toggle('hidden');
                  aciertos++;
              }
          }
          if(aciertos === palabraSelecta.length) {
            
            gano.style.display='';
              endGame();
        ;
      }
      }

      function dibujarPalabra  () {
          // forEach nos sirve para tomar cada elemento que hay ennun array en este caso toma las letras separadas por el split*/
        palabraSelecta.forEach(letter => {
            var letraContenida = document.createElement('p');  /* crea un elemento en html en donde se lo indiquemos en este caso crea una etiqueta p en el espacio de palabraContenida en nuestro html*/
        letraContenida.innerHTML = letter.toUpperCase();/*cpnvierte cada letra en mayuscula*/
            letraContenida.classList.add('letter');
            letraContenida.classList.add('hidden');
            mostrarPalabra.appendChild(letraContenida); /* envia cada espacio creado*/
        });
          }



          function endGame  () {
              document.removeEventListener('keydown', obtenerLetra);
            
            
          }

          function  reset(){
              aciertos=0;
              errores=0;
              palabraSelecta =[];
              mostrarPalabra.innerHTML='';
              mostrarLetrasUsadas.innerHTML='';
              letrasUsadas=[];
              perdio.style.display="none";
              gano.style.display="none";
              mostar.style.display="none";
              
          
          }

          var pantalla = document.querySelector("canvas");
        var pincel = pantalla.getContext("2d");    

          function  añadirPartesMuñeco(errores){
              var opciones;
              var err= errores;
            for(let i=1; i<=err; i++){
              opciones=i;
            
            switch (opciones){
                  case 1:
                    pincel.fillStyle= " gray"// caracteristica 
                    pincel.fillRect(330, 0, 5, 35);
          
                    break;
          
          
                    case 2:
                      // cabeza
                        
                        pincel.beginPath(); // iniciar una direccion 
                        pincel.arc(333,70,35,0,2*Math.PI)
                        pincel.strokeStyle="gray";
                        pincel.lineWidth = 5;
                        pincel.stroke();
                        break;
                    
                        case 3:
          
                        // cuerpo
                      pincel.fillStyle= " gray"// caracteristica 
                        pincel.fillRect(330, 105, 5, 120);
                      break;
          
          
                      case 4:
              // brazo zxquierdo
                          pincel.strokeStyle="gray";
                          pincel.beginPath();
                          pincel.moveTo(330, 125);
                          pincel.lineWidth = 5;
                          pincel.lineCap = 'round';
                          pincel.lineTo(275, 150);
                          pincel.stroke();
                        break;
                        
          
                        case 5:
                          // brazo derecho
                          pincel.strokeStyle="gray";
                          pincel.beginPath();
                          pincel.moveTo(335, 125);
                          pincel.lineWidth = 5;
                          pincel.lineTo(400, 150);
                          pincel.stroke();
                          break;
          
          
          
                          case 6:
                              // pie derecho
                            pincel.strokeStyle="gray";
                            pincel.beginPath();
                            pincel.moveTo(335, 225);
                            pincel.lineWidth = 5;
                            pincel.lineTo(400, 250);
                            pincel.stroke();  
                            break;
          
                            case 7:
                                // pie dizquierdp
                                pincel.strokeStyle="gray";
                                pincel.beginPath();
                                pincel.moveTo(330, 225);
                                pincel.lineWidth = 5;
                                pincel.lineTo(275, 250);
                                pincel.stroke();
                                endGame();
                                break;
                          default:
                            document.write(" LO SENTIMOS HA PERDIDO EL JUEGO");
                          
                            break;
                              
                    
            }
            }
          };



          
  function cambiosEstilo(){
      var titulo=document.querySelector(".titulo");
      var encabezado=document.querySelector(".Encabezado");
      var nombre=document.querySelector(".nombre");

      
      inicioBoton.style.display="none" //Element will not be displayed
      palabraNueva.style.display="none";
      body.classList.add('fondo')
      encabezado.classList.add('Encabezado2');
      /* añadimos una nueva clase a la etiqueta*/
      titulo.classList.add('titulo2');
      nombre.classList.add('nombre2');
  }


  function Palabra() {
    // forEach nos sirve para tomar cada elemento que hay ennun array en este caso toma las letras separadas por el split*/
  palabraSelecta.forEach(letter => {
      var letraContenida = document.createElement('p');  /* crea un elemento en html en donde se lo indiquemos en este caso crea una etiqueta p en el espacio de palabraContenida en nuestro html*/
  letraContenida.innerHTML = letter.toUpperCase();/*cpnvierte cada letra en mayuscula*/
    
      mostar.appendChild(letraContenida); /* envia cada espacio creado*/
  });
    }





    // parte para agregar una nueva palabra
    var guardar=document.querySelector(".guardar");
    var salir=document.querySelector(".salir");
    var text=document.getElementById("ingresoPalabra");
    guardar.style.display="none"
    salir.style.display="none"
    text.style.display="none"

  function nuevaPalabra(){

    guardar.style.display=''
    salir.style.display=''
    text.style.display=''

    var titulo=document.querySelector(".titulo");
      var encabezado=document.querySelector(".Encabezado");
      var nombre=document.querySelector(".nombre");
      
      body.classList.add('body3')
      encabezado.classList.add('Encabezado3');
      /* añadimos una nueva clase a la etiqueta*/
      titulo.classList.add('titulo3');
      
      inicioBoton.style.display="none" //Element will not be displayed
      palabraNueva.style.display="none";
      

  }

  function salida(){
    var titulo=document.querySelector(".titulo");
    var encabezado=document.querySelector(".Encabezado");
    var nombre=document.querySelector(".nombre");
    
    body.classList.toggle('body3')
    encabezado.classList.toggle('Encabezado3');
    /* quitamos una nueva clase a la etiqueta*/
    titulo.classList.toggle('titulo3');
    guardar.style.display="none"
    salir.style.display="none"
    text.style.display="none"
    inicioBoton.style.display=''
    palabraNueva.style.display=''

  }


  function Guardar(){
    let contenido=document.getElementById("ingresoPalabra").value;
    palabras.push(contenido);

    salida();
  
  }
  