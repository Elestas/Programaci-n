var clubHoyle = {"personajes": [
    {
         "nombre": "jane_hoyle",
         "hombre": false,
         "edad": 31,
         "clase": ["charlatan","erudita"],
         "residencia": "chicago"
     }
 ,
 
     {
         "nombre": "danton",
         "hombre": true,
         "edad": 37,
         "clase": ["ilusionista","portalomante"],
         "residencia": "paris"
 },
 {
         "nombre": "jack_peres",
         "hombre": true,
         "edad": 45,
         "clase": ["ingeniero","filantropo","playboy"],
         "residencia": "dodge_city"
 }
 ]
 }
 
 
     
 
function holaMundo(a,b,c) {
   var sum = sumar(a,100,c,3);      
    alert(sum);
    //var texto="suscribete " + texto2;
    //alert(texto);
    
}
function loop(a,b) {
    let sum = a + b;      
    if(sum > 18) {
        console.log("Bienvenido")
        } else if(sum == 18){
        console.log("Al palo")
        } else {
        menorEdad(18-sum);
        console.log("Inténtalo más tarde")
        }
    
 }
 function menorEdad(resta) {
    var cubiertos = ["tenedor","cuchillo","cuchara"]
    var lista="-->";
    console.log(lista)
    for(let i=0;i<cubiertos.length;i++) {
        lista = lista + "el cubierto número " + i + " es un " + cubiertos[i] + "\n";
        //console.log("i:" +i)
        //alert("Infringes el control parental")
    }
    console.log(lista)
    
    for(let item of cubiertos) {
        console.log(item)
    }
    
    var i=0;
    while(i<3) {
        console.log("while")
        i++;
    }
    i=0
    do {
        console.log("do-while")
        i++;
        }while(i<3) 

    }
    
 function sumar(d,e,f,g) {
    var resultado = d + e - f - g;
   switch(resultado) {
    case 7: 
        console.log("numero 7");
        break;
    case 10:
        console.log("numero 10")
        break;
    default:
        console.log("no coincide")
   }
   
    return resultado;
    console.log(resultado)
 }
    
 function deadlands()  {
    //Conseguir los datos
    var ListaPjs = clubHoyle;
    //Establecer el bucle
    for(let i=0;i<ListaPjs.personajes.length;i++) {
    //Ejecutar el listado por medio del bucle
    //Mostrarlo en un console.log
    console.log(ListaPjs.personajes[i].nombre)
   }
    
       
 }