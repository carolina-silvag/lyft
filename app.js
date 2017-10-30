/*esto encontre en mi investigacion, no lo sé utilizar bien pero resulto*/

$(document).ready(function(){
	/*esta parte la hice para cuando el mouse pasa por encima de explore (la palabra del menu) se desplege
	el menu faltante llamado "mas", implemente remover class*/
	$(".explore").hover(
	  function() {
	    $(".mas").css("display", "inline-block");
	    $(".explore i").removeClass('fa-chevron-down');
	    $(".explore i").addClass('fa-chevron-up');
		$('.ocultar-sign').addClass('reaparece-sign');
		$('.interno-1').addClass('nuevo-interno-1');
		$('.lift-1').addClass('logo-1');
		$('.lift-2').addClass('logo-2');
		$('.color').addClass('nuevo-color');
		$('.login').addClass('nuevo-login');
		$('.mas').addClass('mostrar-mas');
	  }, function() {  /*esta parte es para que no se valla el manu "mas" cuando 
	                    se sale el mouse de explore*/
	  }
	);
	 /*si sale de interno entonces que se valla "mas", tambien agrege el cambio
	 de icono para cuando pasar por encima de explore y se va de interno-1 que es mi header*/
	$(".interno-1").hover(
	  function() {   /*cuando se coloca el mouse en interno-1, no pasa nada*/
	  }, function() {
	    $(".explore i").removeClass('fa-chevron-up');
	    $(".explore i").addClass('fa-chevron-down');
	    $(".mas").css("display", "none");
	    changeMenuByScroll();
	  }
	);
	 /*para cuando el scroll baja*/
	function changeMenuByScroll(){
		if($(this).scrollTop() > 100){
			$('.ocultar-sign').addClass('reaparece-sign');
			$('.interno-1').addClass('nuevo-interno-1');
			$('.lift-1').addClass('logo-1');
			$('.lift-2').addClass('logo-2');
			$('.color').addClass('nuevo-color');
			$('.login').addClass('nuevo-login');
			$('.mas').addClass('mostrar-mas');

		} else{
			$('.ocultar-sign').removeClass('reaparece-sign');
			$('.interno-1').removeClass('nuevo-interno-1');
			$('.lift-1').removeClass('logo-1');
			$('.lift-2').removeClass('logo-2');
			$('.color').removeClass('nuevo-color');
			$('.login').removeClass('nuevo-login');
			$('.mas').removeClass('mostrar-mas');
		}

	}

	/*llamo a la funcion cuando empieza el programa y coloca el header
	dependiendo del lugar en cual esta*/
	changeMenuByScroll();
	/*cada ves que se mueve el scroll*/
	$(window).scroll(function(){
		changeMenuByScroll();
	});


});
