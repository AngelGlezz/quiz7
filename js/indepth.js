
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;


var maxTime = 30;
var time = maxTime;
var time_out=0;

$('#dial').knob({
  readOnly : true,
  thickness : 0.2,
  max : maxTime,
  width: 45,
  height: 45,
  inputColor: "#fff",
  fgColor: "#fff",
  bgColor: "rgb(48, 103, 165)",
  angleArc: "360",
  rotation: "anticlockwise",
  displayPrevious: true,
  fontWeight: 16,
  
});

var intervalo;

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  "preguntas": [
					    {
					      "pregunta": "¿Qué afición fue la más representativa de la Euro?",
					      "respuestas": [
					        {
					          "respuesta": "Inglaterra",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Islandia",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Francia",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Italia",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Qué futbolista decepcionó más en el torneo?",
					      "respuestas": [
					        {
					          "respuesta": "Zlatan",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Cristiano Ronaldo",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Griezmann",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Buffon",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Contra qué equipo perdió Alemania?",
					      "respuestas": [
					        {
					          "respuesta": "Inglaterra",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Italia",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Portugal",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Francia",
					          "tipo": "true"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿En qué instancia fue eliminado España?",
					      "respuestas": [
					        {
					          "respuesta": "Semifinales",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Fase de Grupos",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Octavos",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Cuartos",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Cuántos goles anotó Zlatan?",
					      "respuestas": [
					        {
					          "respuesta": "2",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "3",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "1",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "0",
					          "tipo": "true"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Cuál fue el partido con más goles del torneo?",
					      "respuestas": [
					        {
					          "respuesta": "Hungría vs. Portugal",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "España vs. Italia",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Francia vs. Islandia",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Hungría vs. Bélgica",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Cuántos goles marcó Bale?",
					      "respuestas": [
					        {
					          "respuesta": "3",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "4",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "2",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "1",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿En qué lugar de su grupo calificó Portugal?",
					      "respuestas": [
					        {
					          "respuesta": "Primero",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Segundo",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Tercero",
					          "tipo": "true"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Qué día de junio inició la copa?",
					      "respuestas": [
					        {
					          "respuesta": "10",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "11",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "9",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "12",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿En qué ciudad se jugó el partido inaugural?",
					      "respuestas": [
					        {
					          "respuesta": "Marsella",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "París",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Burdeos",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Lille",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "Estadio de la final",
					      "respuestas": [
					        {
					          "respuesta": "Stade Pierre-Mauroy",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Parc Olympique Lyonnais",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Stade de France",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Stade Vélodrome",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Cuántos goles anotó Islandia en el torneo?",
					      "respuestas": [
					        {
					          "respuesta": "8",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "7",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "9",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "10",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Quién fue el máximo goleador de España?",
					      "respuestas": [
					        {
					          "respuesta": "Fernando Torres",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Aduriz",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Nolito",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Morata",
					          "tipo": "true"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Cuántos terceros lugares clasificaron a octavos?",
					      "respuestas": [
					        {
					          "respuesta": "6",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "4",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "2",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "ninguno",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Qué futbolista anotó el primer gol del torneo?",
					      "respuestas": [
					        {
					          "respuesta": "Giroud",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Griezmann",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Payet",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Martial",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Quién es el jugador más joven en anotar en el torneo?",
					      "respuestas": [
					        {
					          "respuesta": "Cristiano Ronaldo",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Figo",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Renato Sanches",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Nuno Gomes",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Contra quién jugó Francia en la inauguración?",
					      "respuestas": [
					        {
					          "respuesta": "Rumanía",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Albania",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Suiza",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Italia",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Qué equipo eliminó al campeón de la edición anterior?",
					      "respuestas": [
					        {
					          "respuesta": "Alemania",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Francia",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Italia",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Inglaterra",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Cuántos empates tuvo Portugal en fase de grupos?",
					      "respuestas": [
					        {
					          "respuesta": "Ninguno",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "1",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "2",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "3",
					          "tipo": "true"
					        }
					      ]
					    },
					    {
					      "pregunta": "En qué instancia fue eliminada Islandia?",
					      "respuestas": [
					        {
					          "respuesta": "Fase de grupos",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Semifinal",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Cuartos",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Octavos",
					          "tipo": "false"
					        }
					      ]
					    }
					  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.png" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000, function(){
			$("#indepth_tiempo_cont").css("position","fixed");
			intervalo=setInterval(function() {
			  if(time<=0){
			  	clearInterval(intervalo);
			  	finish_test();
			 }	
			  time--;
			  $('#dial')
			        .val(time)
			        .trigger('change');
			}, 1000);
		});
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				final_time = time;
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					clearInterval(intervalo);
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
		
});


$('#dial')
        .val(99)
        .trigger('change');


function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";

  	if(aciertos<=5){
	  	aficionado="";
	  	msg="decepcionaste como Zlatan, no te alcanzó ni siquiera para ser tercer lugar, retírate.";
  	}
  	
  	if(aciertos<=10 && acierto >= 6){
	  	aficionado="";
	  	msg="aplicaste la de Irlanda del Norte, pasaste de ronda pero nada trascendente.";
  	}

  	if(aciertos>=11 && aciertos<=15){
	  	aficionado="";
	  	msg="eres como Islandia, la revelación, prometes un gran futuro. ¡Sigue esforzándote!";
  	}

  	if(aciertos>=16 && aciertos<=20){
	  	aficionado="";
	  	msg="¡Encontré a mi Griezmann de la Euro! Se nota que no te perdiste ningún partido.";
  	}
  	
  	$("#indepth_aciertos").html(aciertos);
  	$("#indepth_aciertos_text").html(msg);
  	$("#tipo_aficionado").html( aficionado );
  	
}



$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$('.idepth_marcador, .idepth_marcador2').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}
});


$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$('.idepth_marcador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});

$('.idepth_marcador2').keyup(function(event) {
	if($(this).val()!="" ){
		input_text2=true;
	}else{
		input_text2=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log(input_text + " - " + input_text2 + " - " + input_goles);
	
	if(input_text && input_text2 && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
	
	console.log(disable);
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

$("#indepth_twittear").click(function(){

	if(!disable){

		
		var text = encodeURIComponent("Mi predicción es: Francia "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " Portugal primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutbol";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/");
		window.open("https://twitter.com/share?text="+text+"&hashtags=juanfutbol&url="+url,"","width=500, height=300");

	}else{
		
		
		
	}
	
	});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});
});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


