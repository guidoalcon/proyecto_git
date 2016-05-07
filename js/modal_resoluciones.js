        
		function verResolucion(nro_a,nro_b){
                    if(typeof light != 'undefined'){
                        light.close();    
                        }
            
			        light = new LightFace.IFrame({ height:360, width:520, url: '../../views/resoluciones/informacion_resolucion.php?nrA='+nro_a+'&nrB='+nro_b, title: 'INFORMACION DE RESOLUCIÓN' }).addButton('Cerrar', function() { light.close(); },true).open();     	
				
		}
		function nuevaVentanaResolucion(){
            if(typeof light != 'undefined'){
                        light.close();    
                        }
            light = new LightFace.IFrame({ height:480, width:520, url: '../../views/resoluciones/form_nuevo_resoluciones_reg.php', title: 'FORMULARIO NUEVA RESOLUCION' }).addButton('Cerrar', function() { light.close(); },true).open();
        }
        function modificarR(nro_a,nro_b,nro_c,nro_d){
                    if(typeof light != 'undefined'){
                        light.close();    
                    }
			        light = new LightFace.IFrame({ height:480, width:520, url: '../../views/resoluciones/form_editar_resoluciones.php?reg='+nro_a+'&tip='+nro_b+'&arch='+nro_c+'&estad='+nro_d, title: 'FORMULARIO DE ACTUALIZACION' }).addButton('Cerrar', function() { light.close(); },true).open();     	
				    
		}
        function eliminarR(nro_a,nro_b,nro_c){
                    if(typeof light != 'undefined'){
                        light.close();    
                    }
			        light = new LightFace.IFrame({ height:210, width:520, url: '../../views/resoluciones/form_eliminar_resoluciones.php?nroA='+nro_a+'&nroB='+nro_b+'&nroC='+nro_c, title: 'FORMULARIO DE ELIMINACION DE RESOLUCION' }).addButton('Cerrar', function() { light.close(); },true).open();
                    //light = new LightFace.IFrame({ height:190, width:300, url: 'form_eliminar_resoluciones.php?reg='+nro_a+'&tip='+nro_b+'&arch='+nro_c, title: 'FORMULARIO DE ELIMINACION' }).addButton('Cerrar', function() { light.close(); },true).open();     	
				    
		}
        
        function subirArchivo(nro_a,nro_b){
                    
				    if(typeof light != 'undefined'){
                        light.close();    
                    }
					light = new LightFace.IFrame({ height:250, width:520, url: '../../views/resoluciones/form_nuevo_resolucion_digital.php?nroA='+nro_a+'&nroB='+nro_b, title: 'FORMULARIO DE SUBIDA DE RESOLUCION DIGITAL' }).addButton('Cerrar', function() { light.close(); },true).open();
				
		}
        function modificarArchivo(nro_a,nro_b,nro_c){
				    if(typeof light != 'undefined'){
                        light.close();    
                    }
					light = new LightFace.IFrame({ height:250, width:520, url: '../../views/resoluciones/form_modificar_resolucion_digital.php?nroA='+nro_a+'&nroB='+nro_b+'&nroC='+nro_c, title: 'FORMULARIO DE MODIFICACION DE RESOLUCION DIGITAL' }).addButton('Cerrar', function() { light.close(); },true).open();
				
		}
        function eliminarArchivo(nro_a,nro_b,nro_c){
				    if(typeof light != 'undefined'){
                        light.close();    
                    }
					light = new LightFace.IFrame({ height:200, width:520, url: '../../views/resoluciones/form_eliminar_resolucion_digital.php?nroA='+nro_a+'&nroB='+nro_b+'&nroC='+nro_c, title: 'FORMULARIO DE ELIMINACION DE RESOLUCION DIGITAL' }).addButton('Cerrar', function() { light.close(); },true).open();
				
		}
	   