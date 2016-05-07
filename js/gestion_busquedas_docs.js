                function seleccionarGestion(){
				
                    var lista_gestion=document.getElementById("gestion_doc_v2");
                    var lista_mes_ini=document.getElementById("mes_ini_doc_v2");
                    var lista_mes_fini=document.getElementById("mes_fini_doc_v2");
                    
                    var valorSeleccionado = lista_gestion.options[lista_gestion.selectedIndex].value;
                    
                    if(valorSeleccionado!='all'){
                        document.getElementById("mes_ini_doc_v2").disabled=false;
                        document.getElementById("mes_fini_doc_v2").disabled=false;
                        
                    }else{
                        document.getElementById("mes_ini_doc_v2").disabled=true;
                        document.getElementById("mes_fini_doc_v2").disabled=true;
                        
                    }
                }
        		function seleccionarMesInicial(){
					
                    
					$('#mes_fini_doc_v2').empty();
                    
					
                    //$('#mes_ini option:selected').clone().appendTo("#mes_fini");
					
					var lista = document.getElementById("mes_ini_doc_v2");
					
					// Obtener el valor de la opción seleccionada
					var valorSeleccionado = lista.options[lista.selectedIndex].value;
					// Obtener el texto que muestra la opción seleccionada
					var textoSeleccionado = lista.options[lista.selectedIndex].text;
					
					var tam=lista.options.length;
					// ahora vamos a obtener el tam del otro seleccionable
					var lista2 = document.getElementById("mes_fini_doc_v2");
                    lista2.style.display = "true";
					//lista2.style.display = "true";
					var tam2=lista2.options.length;
					//var variable=new Option("Enero","valor");
					//lista2.options[1]=variable;
					
					
					if(valorSeleccionado == '1'){
						lista2.options[0]=new Option("ENERO","1");
						lista2.options[1]=new Option("FEBRERO","2");
						lista2.options[2]=new Option("MARZO","3");
						lista2.options[3]=new Option("ABRIL","4");
						lista2.options[4]=new Option("MAYO","5");
						lista2.options[5]=new Option("JUNIO","6");
						lista2.options[6]=new Option("JULIO","7");
						lista2.options[7]=new Option("AGOSTO","8");
						lista2.options[8]=new Option("SEPTIEMBRE","9");
						lista2.options[9]=new Option("OCTUBRE","10");
						lista2.options[10]=new Option("NOVIEMBRE","11");
						lista2.options[11]=new Option("DICIEMBRE","12");
                        lista2.options[11].selected=true;
						//alert('Estas en el dia :'+tam2);
					}else if(valorSeleccionado == '2'){
						lista2.options[0]=new Option("FEBRERO","2");
						lista2.options[1]=new Option("MARZO","3");
						lista2.options[2]=new Option("ABRIL","4");
						lista2.options[3]=new Option("MAYO","5");
						lista2.options[4]=new Option("JUNIO","6");
						lista2.options[5]=new Option("JULIO","7");
						lista2.options[6]=new Option("AGOSTO","8");
						lista2.options[7]=new Option("SEPTIEMBRE","9");
						lista2.options[8]=new Option("OCTUBRE","10");
						lista2.options[9]=new Option("NOVIEMBRE","11");
						lista2.options[10]=new Option("DICIEMBRE","12");
                        lista2.options[10].selected=true;
						
						}else if(valorSeleccionado == '3'){
						lista2.options[0]=new Option("MARZO","3");
						lista2.options[1]=new Option("ABRIL","4");
						lista2.options[2]=new Option("MAYO","5");
						lista2.options[3]=new Option("JUNIO","6");
						lista2.options[4]=new Option("JULIO","7");
						lista2.options[5]=new Option("AGOSTO","8");
						lista2.options[6]=new Option("SEPTIEMBRE","9");
						lista2.options[7]=new Option("OCTUBRE","10");
						lista2.options[8]=new Option("NOVIEMBRE","11");
						lista2.options[9]=new Option("DICIEMBRE","12");
                        lista2.options[9].selected=true;
						
						}else if(valorSeleccionado == '4'){
						lista2.options[0]=new Option("ABRIL","4");
						lista2.options[1]=new Option("MAYO","5");
						lista2.options[2]=new Option("JUNIO","6");
						lista2.options[3]=new Option("JULIO","7");
						lista2.options[4]=new Option("AGOSTO","8");
						lista2.options[5]=new Option("SEPTIEMBRE","9");
						lista2.options[6]=new Option("OCTUBRE","10");
						lista2.options[7]=new Option("NOVIEMBRE","11");
						lista2.options[8]=new Option("DICIEMBRE","12");
						lista2.options[8].selected=true;
						}else if(valorSeleccionado == '5'){
						lista2.options[0]=new Option("MAYO","5");                        
						lista2.options[1]=new Option("JUNIO","6");
						lista2.options[2]=new Option("JULIO","7");
						lista2.options[3]=new Option("AGOSTO","8");
						lista2.options[4]=new Option("SEPTIEMBRE","9");
						lista2.options[5]=new Option("OCTUBRE","10");
						lista2.options[6]=new Option("NOVIEMBRE","11");
						lista2.options[7]=new Option("DICIEMBRE","12");
                        lista2.options[7].selected=true;
						
						}else if(valorSeleccionado == '6'){
						lista2.options[0]=new Option("JUNIO","6");
						lista2.options[1]=new Option("JULIO","7");
						lista2.options[2]=new Option("AGOSTO","8");
						lista2.options[3]=new Option("SEPTIEMBRE","9");
						lista2.options[4]=new Option("OCTUBRE","10");
						lista2.options[5]=new Option("NOVIEMBRE","11");
						lista2.options[6]=new Option("DICIEMBRE","12");
                        lista2.options[6].selected=true;
						
						}else if(valorSeleccionado == '7'){
						lista2.options[0]=new Option("JULIO","7");
						lista2.options[1]=new Option("AGOSTO","8");
						lista2.options[2]=new Option("SEPTIEMBRE","9");
						lista2.options[3]=new Option("OCTUBRE","10");
						lista2.options[4]=new Option("NOVIEMBRE","11");
						lista2.options[5]=new Option("DICIEMBRE","12");
                        lista2.options[5].selected=true;
						
						}else if(valorSeleccionado == '8'){
						lista2.options[0]=new Option("AGOSTO","8");
						lista2.options[1]=new Option("SEPTIEMBRE","9");
						lista2.options[2]=new Option("OCTUBRE","10");
						lista2.options[3]=new Option("NOVIEMBRE","11");
						lista2.options[4]=new Option("DICIEMBRE","12");
                        lista2.options[4].selected=true;
						
						}else if(valorSeleccionado == '9'){
						lista2.options[0]=new Option("SEPTIEMBRE","9");
						lista2.options[1]=new Option("OCTUBRE","10");
						lista2.options[2]=new Option("NOVIEMBRE","11");
						lista2.options[3]=new Option("DICIEMBRE","12");
                        lista2.options[3].selected=true;
						
						}else if(valorSeleccionado == '10'){
						lista2.options[0]=new Option("OCTUBRE","10");
						lista2.options[1]=new Option("NOVIEMBRE","11");
						lista2.options[2]=new Option("DICIEMBRE","12");
                        lista2.options[2].selected=true;
						
						}else if(valorSeleccionado == '11'){
						lista2.options[0]=new Option("NOVIEMBRE","11");
						lista2.options[1]=new Option("DICIEMBRE","12");
                        lista2.options[1].selected=true;
						
						}else if(valorSeleccionado == '12'){
						lista2.options[0]=new Option("DICIEMBRE","12");
                        lista2.options[0].selected=true;	
						}else if(valorSeleccionado == 'all'){
                        lista2.options[0]=new Option("Todos los meses","all");
                        lista2.options[0].selected=true;
						}
					
					
					}
                
                
                function seleccionarTipoAvanzada(){
				
                    var lista_tipos=document.getElementById("tipo_doc_v3");
                    var lista_gestion_ini=document.getElementById("gestion_ini_doc_v3");
                    var lista_mes_i=document.getElementById("mes_ini_a_doc_v3");
                    var lista_mes_f=document.getElementById("mes_fini_a_doc_v3");
                    
                    var valorSeleccionado = lista_tipos.options[lista_tipos.selectedIndex].value;
					var tam=lista_gestion_ini.options.length;
                    
                    if(valorSeleccionado=='all'){
                        
                            document.getElementById("gestion_ini_doc_v3").disabled=true;
                            document.getElementById("mes_ini_a_doc_v3").disabled=true;
                            document.getElementById("mes_fini_a_doc_v3").disabled=true;
                            document.getElementById("gestion_fini_doc_v3").disabled=true;    
                        
                        
                    }else{
                        if(tam==1){
                            document.getElementById("gestion_ini_doc_v3").disabled=true;
                            document.getElementById("mes_ini_a_doc_v3").disabled=true;
                            document.getElementById("mes_fini_a_doc_v3").disabled=true;
                            document.getElementById("gestion_fini_doc_v3").disabled=true;
                        }else{
                            document.getElementById("gestion_ini_doc_v3").disabled=false;
                            document.getElementById("mes_ini_a_doc_v3").disabled=false;
                            document.getElementById("mes_fini_a_doc_v3").disabled=false;
                            document.getElementById("gestion_fini_doc_v3").disabled=false;
                        }
                        
                    }
					seleccionarGestionIni();
                }
                
                
                function seleccionarGestionIni(){
				    
                    $('#gestion_fini_doc_v3').empty();
                    var lista_gestion_ini=document.getElementById("gestion_ini_doc_v3");
                    var lista_mes_i=document.getElementById("mes_ini_a_doc_v3");
                    var lista_gestion_fini=document.getElementById("gestion_fini_doc_v3");
                    
                    var valorSeleccionado = lista_gestion_ini.options[lista_gestion_ini.selectedIndex].value;
					var posicion_seleccionado=lista_gestion_ini.selectedIndex;
                    var posicion_indice=posicion_seleccionado+1;
                    var tam=lista_gestion_ini.options.length;
                    var valorUltimo = lista_gestion_ini.options[tam-1].value;
                    var j=0;
                    //alert(''+valorUltimo);
                    
                    if(valorSeleccionado==valorUltimo){
                            document.getElementById("mes_ini_a_doc_v3").disabled=true;
                            document.getElementById("mes_fini_a_doc_v3").disabled=true;
                            document.getElementById("gestion_fini_doc_v3").disabled=true;
                    }else{
                            document.getElementById("mes_ini_a_doc_v3").disabled=false;
                            document.getElementById("mes_fini_a_doc_v3").disabled=false;
                            document.getElementById("gestion_fini_doc_v3").disabled=false;
                            
                    
                    for(var i=posicion_indice;i<=tam;i++){
                        var valor=lista_gestion_ini.options[i].value;
                        lista_gestion_fini.options[j]=new Option(valor,valor);
                        lista_gestion_fini.options[j].selected=true;
                        j++;
                    }
                    
                    }
                    
                    
                    
                }
                
                window.onload = function(){
                            var lista_tipos=document.getElementById("tipo_doc_v3");
                            lista_tipos.options[0].selected=true;
                            var lista_gestion_ini=document.getElementById("gestion_ini_doc_v3");
                            lista_gestion_ini.options[0].selected=true;
                            var lista_gestion_fini=document.getElementById("gestion_fini_doc_v3");
                            lista_gestion_fini.options[0].selected=true;
                            var lista_mes_i=document.getElementById("mes_ini_a_doc_v3");
                            lista_mes_i.options[0].selected=true;
                            var lista_mes_f=document.getElementById("mes_fini_a_doc_v3");
                            lista_mes_f.options[0].selected=true;
							
                            document.getElementById("gestion_ini_doc_v3").disabled=true;
                            document.getElementById("mes_ini_a_doc_v3").disabled=true;
                            document.getElementById("mes_fini_a_doc_v3").disabled=true;
                            document.getElementById("gestion_fini_doc_v3").disabled=true;
                                
            }