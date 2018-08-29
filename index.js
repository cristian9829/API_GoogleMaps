var map,infoWindow,Pos;

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position){
		Pos = {
			lat:position.coords.latitude,
			lng:position.coords.longitude
		}
		initMapa()
	})
}else{
	alert("Tu navegador no soporta la Geolocalizacion");
}


function initMapa(){
	var mapContainer = document.getElementById("map");
	var config = {
		center: {lat:-34.397, lng:150.644},
		zoom:5
	}
	map = new google.maps.Map(mapContainer,config)  
	infoWindow = new google.maps.infoWindow({map:map})
}

var boton = document.getElementById("btn-geo");

boton.addEventListener ("click", function(){
	alert("Se buscara su localizacion en el mapa");
	map.setCenter(Pos)//Para que el mapa se ubique en las posiciones que captura al usuario
	map.setZoom(15)//Para aunmentar un poco el zoom del mapa
	infoWindow.setPosition(Pos)//Para que la ventana de informacion se situe en la posicion del usuario
	infoWindow.setContent("Tu estas aqui")//Agregar un mensaje de la ubicacion encontrada del usuario
});