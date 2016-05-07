	function nuevaVentanaUser(){
                    
                    if(typeof light != 'undefined'){
                        light.close();    
                        }
					light = new LightFace.IFrame({ height:480, width:520, url: '../../views/usuario/form_nuevo_usuario.php' , title: 'FORMULARIO NUEVO USUARIO' }).addButton('Cerrar', function() { light.close(); },true).open();
				
		}
        function informacionUsuario(nro_a){
                    if(typeof light != 'undefined'){
                        light.close();    
                        }
			        light = new LightFace.IFrame({ height:320, width:650, url: '../../views/usuario/informacion_usuario.php?reg='+nro_a, title: 'INFORMACION DEL USUARIO' }).addButton('Cerrar', function() { light.close(); },true).open();     	
				
		}
        function modificarUsuario(nro_a){
                    //window.location='../../views/usuario/form_editar_usuario.php?reg='+nro_a+'&ventana=1';
                    
                    if(typeof light != 'undefined'){
                        light.close();    
                        }   
			        light = new LightFace.IFrame({ height:480, width:520, url: '../../views/usuario/form_editar_usuario.php?reg='+nro_a, title: 'FORMULARIO DE ACTUALIZACION' }).addButton('Cerrar', function() { light.close(); },true).open();     	
		
		}
        function eliminarUsuario(nro_a){
                    if(typeof light != 'undefined'){
                        light.close();    
                        }  
				    light = new LightFace.IFrame({ height:220, width:400, url: '../../views/usuario/form_eliminar_usuario.php?reg='+nro_a, title: 'ELIMINAR USUARIO' }).addButton('Cerrar', function() { light.close(); },true).open();
				
		}
        function desactivarUsuario(nro_a){
                    if(typeof light != 'undefined'){
                        light.close();    
                        }
				    light = new LightFace.IFrame({ height:220, width:400, url: '../../views/usuario/form_deshabilitar_usuario.php?reg='+nro_a, title: 'DESACTIVAR USUARIO' }).addButton('Cerrar', function() { light.close(); },true).open();
				
		}
        function habilitarUsuario(nro_a){
                    if(typeof light != 'undefined'){
                        light.close();    
                        }
				    light = new LightFace.IFrame({ height:220, width:400, url: '../../views/usuario/form_habilitar_usuario.php?reg='+nro_a, title: 'FORMULARIO DE HABILITAR USUARIO' }).addButton('Cerrar', function() { light.close(); },true).open();
				
		}