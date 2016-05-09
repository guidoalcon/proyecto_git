
//onKeyPress="return justNumbers(event);" 




// JavaScript Document
// Funcion que bloquea entrada de texto en un Imput
function justNumbers(e)
{
    var keynum = window.event ? window.event.keyCode : e.which;
     if ((keynum == 8) || (keynum == 46))
     return true;
         
     return /\d/.test(String.fromCharCode(keynum));
 }
// Funcion que bloquea entrada de Numeros en un Imput 
 function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 37, 39, 46];

    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}
function limpia() {
    var val = document.getElementById("miInput").value;
    var tam = val.length;
    for(i = 0; i < tam; i++) {
        if(!isNaN(val[i]))
            document.getElementById("miInput").value = '';
    }
}

function validarFormatoCorreo()
{
	valor = document.getElementById("campoCorreo").value;
	if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*/.test(valor)) ) {
		//alert('no esta bien');
	  return false;
	}
	else
	{
		  //alert('esta bien');
		return true;
		}
 }
 
 
 // VALIDA EL FORMULARIO
 
function  validarFormularioSolicitud(form)
{
	var array = new Array();
	var arrayID = new Array();  
	var bandera = true;
	
	  array[0] = form['nroRecibo'].value;                 arrayID[0] = 'nroRecibo';
	  array[1] = form['asunto7890'].value;                arrayID[1] = 'asunto7890';
	  array[2] = form['nombre7890'].value;                arrayID[2] = 'nombre7890';
	  array[3] = form['apellido7890'].value;              arrayID[3] = 'apellido7890';  
	  array[4] = form['ci7890'].value;                    arrayID[4] = 'ci7890';
	  array[5] = form['expCI7890'].value;                 arrayID[5] = 'expCI7890';   
	  array[6] = form['nunCelular'].value;                arrayID[6] = 'nunCelular';                
	  array[7] = form['campoCorreo'].value;               arrayID[7] = 'campoCorreo';  
	  
	  
	  array[8] = form['facultad7890'].value;              arrayID[8] = 'facultad7890';       
	  array[9] = form['carrera7890'].value;               arrayID[9] = 'carrera7890';   
	
	
	//array[7] = form['mesNacUsuario'].value;              
	//array[8] = form['anioNacUsuario'].value;             
	//array[9] = form['telfUsuario'].value;                
	//array[10] = form['celuUsuario'].value;               
	//array[11] = form['internoTefUsuario'].value;         
	//array[12] = form['correoUsuario'].value;             
	//array[13] = form['unidadUsuario'].value;            
	//array[14] = form['loginUsuario'].value;
	
	for (i=0; i<array.length; i++)
	{ 
		 if(array[i]=='' )
		 {
			     if(i!=8 && i!=9)
				 {
					    bandera = false;
			            document.getElementById(arrayID[i]).style.backgroundColor="#feebf0"; 
				 }
			 
	
			 }
			 else
			 {  
			 
			   if(i==1 && array[1].substring(0,3)!='Uni')
			   {
				  	if(array[1].substring(0,3)=='Fac')
					{
						
						if(array[8]=='')
						{
							
							document.getElementById(arrayID[8]).style.backgroundColor="#feebf0";
							bandera = false;
							
						}
						else
						{
							 document.getElementById(arrayID[8]).style.backgroundColor="";
								
						}
					}
					else
					{
						if(array[8]=='')
						{
							
							document.getElementById(arrayID[8]).style.backgroundColor="#feebf0";
							bandera = false;
							
						}
						else
						{
							 document.getElementById(arrayID[8]).style.backgroundColor="";
							 if(array[9]=='')
							 {
								 document.getElementById(arrayID[9]).style.backgroundColor="#feebf0";
							     bandera = false;
							  }
							  else
							  {
								  document.getElementById(arrayID[9]).style.backgroundColor="";
							   }
								
						}
					} 	 
				}
			 
			 
			 
				 if(i==0 || i==2 || i==3 || i==4 || i==6 || i==7)
				 { 
				    var mensajeAlerta;
							
					if(i==7)
					{
					   if(validarFormatoCorreo())
					   {
						   document.getElementById(arrayID[i]).style.backgroundColor="";
						}
						else
						{   mensajeAlerta='El campo Correo, no tiene un formato valido.<br /> Ej. Formato: <b>usuario@micorreo.com<b/>';
							apprise('<b>| MENSAJE |</b><br> '+mensajeAlerta, {'animate':true});
					    document.getElementById(arrayID[i]).style.backgroundColor="#feebf0";
						document.getElementById(arrayID[i]).focus();
						 bandera = false;
						 }
					   
					 }
					 else
					 {
						   if(verificarNunChar(array[i],i))
							{
								document.getElementById(arrayID[i]).style.backgroundColor="";
							  }
							else
							{
								
								if(i==0)
								{
								    mensajeAlerta='Ingrese un Nro de Recibo Valido, Por Favor.';
									document.getElementById(arrayID[0]).focus();
								}
								 
								if(i==2)
								{
								    mensajeAlerta='Ingrese un Nombre Valido, Por Favor.';
								    document.getElementById(arrayID[2]).focus();
								 }
								 
								if(i==3)
								{
								   mensajeAlerta='Ingrese un Apellido Valido, Por Favor.';
								   document.getElementById(arrayID[3]).focus();
								 }
								 
								if(i==4)
								{
								    mensajeAlerta='Ingrese un Nro de C.I. Valido, Por Favor.';
									document.getElementById(arrayID[4]).focus();
								}
								 
								if(i==6)
								{   
									mensajeAlerta='Ingrese un Nro de Celular con 8 digítos, Por Favor.'; 
									document.getElementById(arrayID[6]).focus();
								}
								  
								
								apprise('<b>| MENSAJE |</b><br> '+mensajeAlerta, {'animate':true});
								document.getElementById(arrayID[i]).style.backgroundColor="#feebf0";
								bandera = false;
								
							  } 
					  }
					
					
				  }
				  else
				  {
					  document.getElementById(arrayID[i]).style.backgroundColor="";
					  }
				  
			}
		}
   if(bandera.toString()=='true')
	  {   
		  //alert('el  valor de bandera es TRUE '+bandera);
		   document.getElementById('mensajeAlerta').style.visibility='none'; 
		   return true;
	   }
	   else
	   {
		   //alert('el  valor de bandera es FALSE '+bandera);
	     //document.getElementById('mensajeAlerta').innerHTML = "Introdusca los Datos solicitados Por Favor.";
		
		  document.getElementById('mensajeAlerta').style.visibility='visible'; 
		 return false;   
		  }
			

}

function verificarNunChar(numero , i)
{
	var nun=numero.length;
//alert('el valor de i es:'+gi);
	var maxCanti=0;
	if(i==2 || i==3)
	{
		maxCanti=3;
	 }
	 else
	 {
		if(i==5)
		{
			maxCanti=8;
		 }
		 else
		 {
			 maxCanti=5;
		   }	 
      }
	
	if(nun<maxCanti)
	{
		return false;
	  }
	else
	{
		return true;
	  }
	
}
function validarCascadaLista(valorAsunto,facultad,carrera,form)
{
	var bandera=true;
	if(valorAsunto=='Fac')
	{
		
		if(facultad=='')
		{
			document.getElementById('facultad7890').style.backgroundColor="#feebf0";
			
			
		}
		else
		{
			 alert('tiene valor la facultad revisar'+facultad);
			 	
		}
    }
	else
	{
		alert('Facultad revisar y Carrera Revisar');
	}
	return bandera;
}
 
 
 function habilitarCascada(lista)
 {
	 var indice = document.formulario_session.asunto7890.selectedIndex;
	 var op=document.formulario_session.asunto7890.options[indice].value;
     
	 if(op.substring(0,3)=='Fac')
	 {
		  var s1=document.getElementById('facultad7890');
		  s1.options[0]=new Option("Seleccionar...","","0");
		  document.getElementById('facultad7890').disabled=false;
		  document.getElementById('carrera7890').disabled=true;
		  
		  document.getElementById('astFacu').style.visibility='visible'; 
		  
	  }
	  else
	  {
		  if(op.substring(0,3)=='Car')
		  {
			  
			  document.getElementById('facultad7890').disabled=false;
			  document.getElementById('carrera7890').disabled=true;  
			  
			  document.getElementById('astFacu').style.visibility='visible'; 
			  document.getElementById('astCarr').style.visibility='visible'; 
		   }
		   else
		   {
		       var comboFacu = document.forms["formulario_session"].facultad7890;
			   var comboCarrera = document.forms["formulario_session"].carrera7890;
			   comboFacu[0].selected = true;
			   comboCarrera[0].selected = true;
		 
			   document.getElementById('facultad7890').disabled=true;
			  document.getElementById('carrera7890').disabled=true;
			  
			  document.getElementById('astFacu').style.visibility='hidden'; 
			  document.getElementById('astCarr').style.visibility='hidden';
			   
			   }
		  
		  
		  }

	 }
 function habilitarCarrera1()
 {
	 var indice = document.formulario_session.asunto7890.selectedIndex;
	 var op=document.formulario_session.asunto7890.options[indice].value;
	 
	 if(op=='Car')
	 {
		  var indice = document.formulario_session.facultad7890.selectedIndex;
	      var idFacu=document.formulario_session.facultad7890.options[indice].value;
		  
		 //var s1=document.getElementById('carrera7890');
		 //s1.options[0]=new Option("Selecionar.","bilbo111","0");
		 //s1.options[1]=new Option("Bilbo","bilbo","0");
		alert('ID:'+idFacu);
		 document.getElementById('carrera7890').disabled=false;
		
		
	  }
	
	
  }
	 
function setHora()
{
	var fecha = new Date()
	var hora = fecha.getHours()
	var minuto = fecha.getMinutes()
	var segundo = fecha.getSeconds()
	if (hora < 10) {hora = "0" + hora}
	if (minuto < 10) {minuto = "0" + minuto}
	if (segundo < 10) {segundo = "0" + segundo}
	var horita = hora + ":" + minuto + ":" + segundo
	document.getElementById('hora').value = horita;
	tiempo = setTimeout('setHora()',1000);
}
function inicio(){
	
	document.getElementById('nroRecibo').focus();
	setHora();
}	 
	 