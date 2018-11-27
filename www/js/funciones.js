

var arreglo;


var web="https://invernadero123.000webhostapp.com/invernadero/";


document.addEventListener('init',function(event)
{
    if (event.target.id == 'perfil')
    {
  //      cargarDatos()
//        cargarInvernaderos()
    }
});


document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');
});



function EntrarGet(/*usuario,clave*/){
    
     // if(usuario.length==0 && clave.length==0)
       // return;
        
        
      console.log('click');

    /*$.get(web+"login.php?usuario=fer@mail.com&clave=1234",function(data, status){
    //  $.get("http://fervc.000webhostapp.com/invernadero/login.php?usuario="+usuario+"&clave="+clave,function(data, status){
    //http://fervc.000webhostapp.com/app/login.php?usuario=2502&clave=1234
    
    arreglo= data;
    
    console.log("data "+data);
    
    if(data!="\n\nUsuario No Registrado\n"){
                   
        arreglo = arreglo.split("\n", 5);
                    
                    console.log(data)
      */   var myNavigator = document.getElementById('myNavigator');
        myNavigator.pushPage('inicio.html');
        /*        
        
    }
    else{
        ons.notification.alert('El usuario No ha sido Encontrado');
    }

    });
    */
}



  function cargarDatos()
  {
      console.log(arreglo);
      
      document.getElementById('propietario').innerHTML="<i class='fas fa-user-alt'></i> Propietario: "+arreglo[3];
      
      document.getElementById('correo').innerHTML="<i class='fas fa-envelope'></i> Correo: "+arreglo[4];
      
  }


  function cargarInvernaderos()
  {



    $.get( web+"invernaderos.php?id="+arreglo[2], function( data, status ) {
 
  if(data!="\nno encontrado\n"){
                   
        data = data.split("\n");



                    
        console.log(data.length)
       //  var myNavigator = document.getElementById('myNavigator');
       // myNavigator.pushPage('inicio.html');

       for (var i = 1; i < data.length-2; i+=3) {

        $("#pagina_invernadero").before("<ons-card><div class='container'><div class='row'><div class='col-10'>"+data[i+1]+"<br>"+data[i+2]+"</div><div class='col-2'><a class='btn btn-primary' ><i class='fa fa-chevron-right button_icon'></i></a></div></div></ons-card>")

      
    
         console.log(data[i])
         console.log(data[i+1])
         console.log(data[i+2])
         



       }
                
        
    }
    else{


    }

    });
 



 /*
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});

*/


  }
  

