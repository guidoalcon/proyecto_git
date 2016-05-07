// document ready function
$(document).ready(function() { 	

	//------------- Select plugin -------------//
	$("#rol_usuario").select2();
	$("#rol_usuario_e").select2();
	$("#tipo_r").select2();
	$("#estado_r").select2();
	$("#tipo_re").select2();
	$("#gestion").select2();
	$("#mes_ini").select2();
	$("#mes_fini").select2();
	$("#gestion_r").select2();
	$("#gestion_res").select2();
	$("#mes_res").select2();
	$("#dia_res").select2();
	$("#genero_d").select2();
	$("#grado_d_pos").select2();
	$("#id_usuario").select2();
	$('#tipo_re').select2({placeholder: "Seleccionar"});
	$("#gestion").select2({placeholder: "Seleccionar"});
	$("#mes_ini").select2({placeholder: "Seleccionar"});
	$("#mes_fini").select2({placeholder: "Seleccionar"});
	$("#gestion_r").select2({placeholder: "Seleccionar"});
	$("#gestion_res").select2({placeholder: "Seleccionar"});
	$("#mes_res").select2({placeholder: "Seleccionar"});
	$("#dia_res").select2({placeholder: "Seleccionar"});
	$("#id_usuario").select2({placeholder: "Seleccionar"});
	/*Wizard with validation*/
    $('#wizard-validation').smartWizard({
  		transitionEffect: 'fade', // Effect on navigation, none/fade/slide/
  		onLeaveStep:leaveAStepCallbackValidation,
        onFinish:onFinishCallbackValidaton
    });

    function leaveAStepCallbackValidation(obj){
        var step = obj;
        var stepN = step.attr('rel')
        
       /* if(stepN == 1) { return true;}     */  
        //validate step 1
        if(stepN == 1) {

        	if ($("#username1").valid() == true ) {
		        var validate = true;
		    } else {
		    	var validate = false;
		    }
		    if ($("#password1").valid() == true ) {
		        var validate1 = true;
		    } 
		    else {
		    	var validate1 = false;
		    }
		    if ($("#passwordConfirm1").valid() == true ) {
		        var validate2 = true;
		    } 
		    else {
		    	var validate2 = false;
		    }

	        if(validate == true && validate1 == true && validate2 == true) {
	        	step.find('.stepNumber').stop(true, true).remove();
        		step.find('.stepDesc').stop(true, true).before('<span class="stepNumber"><span class="icon16 iconic-icon-checkmark"></span></span>');
	        	return true;
	        } else {
	        	return false;
	        }
        }
        //validate step 2
        if(stepN == 2) {

        	if ($("#fname").valid() == true ) {
		        var validate3 = true;
		    } else {
		    	var validate3 = false;
		    }
		    if ($("#lname").valid() == true ) {
		        var validate4 = true;
		    } else {
		    	var validate4 = false;
		    }
		    if ($("#gender").valid() == true ) {
		        var validate5 = true;
		    } 
		    else {
		    	var validate5 = false;
		    }

	        if(validate3 == true && validate4 == true && validate5 == true) {
	        	step.find('.stepNumber').stop(true, true).remove();
        		step.find('.stepDesc').stop(true, true).before('<span class="stepNumber"><span class="icon16 iconic-icon-checkmark"></span></span>');
	        	return true;
	        } else {
	        	return false;
	        }
        }

        //validate step 2
        if(stepN == 3) {

        	if ($("#email1").valid() == true ) {
		        var validate6 = true;
		    } else {
		    	var validate6 = false;
		    }
		   
	        if(validate6 == true ) {
	        	step.find('.stepNumber').stop(true, true).remove();
        		step.find('.stepDesc').stop(true, true).before('<span class="stepNumber"><span class="icon16 iconic-icon-checkmark"></span></span>');
	        	return true;
	        } else {
	        	return false;
	        }
        }
       
    }
    function onFinishCallbackValidaton(obj){
    	var step = obj;
    	step.find('.stepNumber').stop(true, true).remove();
        step.find('.stepDesc').stop(true, true).before('<span class="stepNumber"><span class="icon16 iconic-icon-checkmark"></span></span>');
      	$.pnotify({
			type: 'success',
		    title: 'Done',
    		text: 'You finish the wizzard',
		    icon: 'picon icon16 iconic-icon-check-alt white',
		    opacity: 0.95,
		    history: false,
		    sticker: false
		});
		$('#wizzard-form').submit();
    }
    
	//--------------- Form validation ------------------//
	$('#rol_usuario').select2({placeholder: "Seleccionar"});
	$('#genero_usuario').select2({placeholder: "Seleccionar"});
    $("#form-validate").validate({
    	ignore: null,
    	ignore: 'input[type="hidden"]',
    	rules: {
    		select1: "required",
			select2: "required",
			
			apellido_required: "required",
			
			requiredArea: "required",
			required1: {
				required: true,
				minlength: 4
			},
			required: {
				required: true,
				digits: false,
				number: false
			},
			password: {
				required: true,
				minlength: 5
			},
			confirm_password: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
			email: {
				required: true,
				email: true
			},
			maxLenght: {		
				required: true,
      			maxlength: 10
			},
			rangelenght: {
		      required: true,
		      rangelength: [10, 20]
		    },
		    minval: {
		      required: true,
		      min: 13
		    },
		    maxval: {
		      required: true,
		      max: 13
		    },
		    range: {
		      required: true,
		      range: [5, 10]
		    },
		    url: {
		      required: true,
		      url: true
		    },
		    date: {
		      required: true,
		      date: true
		    },
		    number: {
		      required: true,
		      number: true
		    },
		    digits: {
		      required: true,
		      digits: true,
			  minlength: 5,
			  maxlength: 8
		    },
			telefono_usuario: {
		      digits: true,
			  minlength: 3,
			  maxlength: 10
			  
		    },
			numero_interno_umss: {
		      number: true
		    },
			numero_interno_umss2: {
		      number: true
		    },
			celular_usuario: {
		      digits: true,
			  minlength: 8,
			  maxlength: 8
		    },
		    ccard: {
		      required: true,
		      creditcard: true
		    },
			agree: "required"
		},
		messages: {
			required: "Este campo es obligatorio",
			apellido_required: "Por favor ingrese el apellido",
			required1: {
				required: "Este campo es requerido",
				minlength: "Este campo requiere minimo 4 caracteres"
			},
			password: {
				required: "Por favor ingrese un password",
				minlength: "Tu password debe tener por lo menos 5 caracteres"
			},
			confirm_password: {
				required: "Por favor confirme el password",
				minlength: "Tu password debe tener por lo menos 5 caracteres",
				equalTo: "Por favor ingrese el mismo password"
			},
			email: "Por favor ingrese un email valido",
			agree: "Por favor acepte nuestra politica"
		}
    });

	$("#wizzard-form").validate({
    	rules: {
    		fname: {
				required: true,
				minlength: 4
			},
			lname: {
				required: true,
				minlength: 4
			},
			gender: {
				required: true
			},
			username1: {
				required: true,
				minlength: 4
			},
			password1: {
				required: true,
				minlength: 5
			},
			confirm_password1: {
				required: true,
				minlength: 5,
				equalTo: "#password1"
			},
			email1: {
				required: true,
				email: true
			}
		},
		messages: {
			fname: {
				required: "This field is required",
				minlength: "This field must consist of at least 4 characters"
			},
			lname: {
				required: "This field is required",
				minlength: "This field must consist of at least 4 characters"
			},
			password1: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long"
			},
			confirm_password1: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long",
				equalTo: "Please enter the same password as above"
			},
			email1: "Please enter a valid email address",
			gender: "Choise a gender"
		}	
    });
	
		//--------------- Form validation ------------------//
	$('#rol_usuario_e').select2({placeholder: "Seleccionar"});
	$('#genero_usuario_e').select2({placeholder: "Seleccionar"});
	$("#form-validate_e").validate({
    	ignore: null,
    	ignore: 'input[type="hidden"]',
    	rules: {
    		rol_usuario_e: "required",
			genero_usuario_e: "required",
			apellido_usuario_e: "required",
			nombre_usuario_e: "required",
			
			usuario_e: {
				required: true,
				minlength: 4
			},
			password: {
				required: true,
				minlength: 5
			},
			confirm_password: {
				required: true,
				minlength: 5,
				equalTo: "#password_e"
			},
			email_usuario_e: {	
				required: true,
				email: true
			},
		    ci_usuario_e: {
		      required: true,
		      digits: true,
			  number: true,
			  minlength: 5,
			  maxlength: 8
		    },
			telefono_usuario_e: {
		      digits: true,
			  minlength: 3,
			  maxlength: 10
			  
		    },
			numero_interno_umss_e: {
		      number: true
		    },
			celular_usuario_e: {
		      digits: true,
			  minlength: 8,
			  maxlength: 8
		    },
			agree: "required"
		},
		messages: {
			required: "Este campo es obligatorio",
			apellido_required: "Por favor ingrese el apellido",
			required1: {
				required: "Este campo es requerido",
				minlength: "Este campo requiere minimo 4 caracteres"
			},
			password: {
				required: "Por favor ingrese un password",
				minlength: "Tu password debe tener por lo menos 5 caracteres"
			},
			confirm_password: {
				required: "Por favor confirme el password",
				minlength: "Tu password debe tener por lo menos 5 caracteres",
				equalTo: "Por favor ingrese el mismo password"
			},
			email: "Por favor ingrese un email valido",
			agree: "Por favor acepte nuestra politica"
		}
    });
	
//VALIDACION  DEL  FORMULARIO  REGISTRO RESOLUCION
//--------------- Form validation ------------------//
	$('#tipo_r').select2({placeholder: "Seleccionar"});
	//$('#letra_r').select2({placeholder: "Seleccionar"});
	$('#estado_r').select2({placeholder: "Seleccionar"});
	$('#gestion_r').select2({placeholder: "Seleccionar"});
	$("#form-validate-resolucion").validate({
    	ignore: null,
    	ignore: 'input[type="hidden"]',
    	rules: {
    		gestion_res:"required", // Para editar resoluciones
			mes_res:"required",		// Para editar resoluciones
			dia_res:"required",		// Para editar resoluciones
			tipo_r: "required",
			estado_r: "required",
			gestion_r: "required",
			fecha_r: {
				required: true,
				minlength: 10,
				maxlength: 10
			},
			numero_r: {
				number: true,
				required: true
			},
		    date: {
		      required: true,
		      date: true
		    },
		    tomo_r: {
		      number: true
		    },
			agree: "required"
		},
		messages: {
			required: "Este campo es obligatorio",
			apellido_required: "Por favor ingrese el apellido",
			required1: {
				required: "Este campo es requerido",
				minlength: "Este campo requiere minimo 4 caracteres"
			},
			password: {
				required: "Por favor ingrese un password",
				minlength: "Tu password debe tener por lo menos 5 caracteres"
			},
			confirm_password: {
				required: "Por favor confirme el password",
				minlength: "Tu password debe tener por lo menos 5 caracteres",
				equalTo: "Por favor ingrese el mismo password"
			},
			email: "Por favor ingrese un email valido",
			agree: "Por favor acepte nuestra politica"
		}
    });

//FIN VALIDACION DEL FORMULARIO REGISTRO RESOLUCION
//VALIDACION  DEL  FORMULARIO  EDITAR RESOLUCION
//--------------- Form validation ------------------//
	$('#tipo_r_e').select2({placeholder: "Seleccione"});
	$('#estado_r_e').select2({placeholder: "Seleccione"});

	$("#form-validate-resolucion-e").validate({
    	ignore: null,
    	ignore: 'input[type="hidden"]',
    	rules: {
			gestion_res:"required",
			mes_res:"required",
			dia_res:"required",
    		tipo_r: "required",
			estado_r: "required",
			apellido_required: "required",
			required: "required",
			codigo_r: "required",
			fecha_r: {
				required: true,
				minlength: 10,
				maxlength: 10
			},
			numero_r: {
				number: true,
				required: true
			},
			email: {
				required: true,
				email: true
			},
			maxLenght: {
				required: true,
      			maxlength: 10
			},
			rangelenght: {
		      required: true,
		      rangelength: [10, 20]
		    },
		    minval: {
		      required: true,
		      min: 13
		    },
		    maxval: {
		      required: true,
		      max: 13
		    },
		    range: {
		      required: true,
		      range: [5, 10]
		    },
		    url: {
		      required: true,
		      url: true
		    },
		    date: {
		      required: true,
		      date: true
		    },
		    tomo_r: {
		      number: true
		    },
		    digits: {
		      required: true,
		      digits: true,
			  minlength: 7,
			  maxlength: 7
		    },
			telefono_usuario: {
		      required: true,
		      number: true
			  
		    },
			numero_interno_umss: {
		      required: true,
		      number: true
		    },
			celular_usuario: {
		      required: true,
		      digits: true
		    },
		    ccard: {
		      required: true,
		      creditcard: true
		    },
			agree: "required"
		},
		messages: {
			required: "Este campo es obligatorio",
			apellido_required: "Por favor ingrese el apellido",
			required1: {
				required: "Este campo es requerido",
				minlength: "Este campo requiere minimo 4 caracteres"
			},
			password: {
				required: "Por favor ingrese un password",
				minlength: "Tu password debe tener por lo menos 5 caracteres"
			},
			confirm_password: {
				required: "Por favor confirme el password",
				minlength: "Tu password debe tener por lo menos 5 caracteres",
				equalTo: "Por favor ingrese el mismo password"
			},
			email: "Por favor ingrese un email valido",
			agree: "Por favor acepte nuestra politica"
		}
    });

//FIN VALIDACION DEL FORMULARIO REGISTRO RESOLUCION

//VALIDACION  DEL  FORMULARIO  REGISTRO DOCUMENTO
//--------------- Form validation ------------------//
	$('#tipo_d').select2({placeholder: "Seleccione"});
	$('#genero_d').select2({placeholder: "Seleccione"});
	$('#grado_d_pos').select2({placeholder: "Seleccione"});
	$("#form-validate-documento").validate({
    	ignore: null,
    	ignore: 'input[type="hidden"]',
    	rules: {
			nombre_d: "required",
			apellidos_d: "required",
			ref_o_d: "required",
			ci_d: {
		      digits: true,
			  number: true,
			  minlength: 5,
			  maxlength: 8
			},
			fecha_d: {
				required: true,
				minlength: 10,
				maxlength: 10
			},
			tomo_d: {
				number: true
			},
			numero_d: {
				number: true,
				required: true
			},
		    folio_d: {
		      required: true,
		      number: true
		    }
			
		},
		messages: {
			required: "Este campo es obligatorio"
				}
    });

//FIN VALIDACION DEL FORMULARIO DOCUMENTO
//VALIDACION  DEL  FORMULARIO  REGISTRO DOCUMENTO
//--------------- Form validation ------------------//
	$("#form-validate-documento-pos").validate({
    	ignore: null,
    	ignore: 'input[type="hidden"]',
    	rules: {
			nombre_d_pos: "required",
			apellidos_d_pos: "required",
			grado_d_pos: "required",
			tesis_d_pos: "required",
			ci_d: {
		      digits: true,
			  number: true,
			  minlength: 5,
			  maxlength: 8
			},
			fecha_d_pos: {
				required: true,
				minlength: 10,
				maxlength: 10
			},
			tomo_d_pos: {
				number: true
			},
			numero_d_pos: {
				number: true,
				required: true
			},
		    folio_d_pos: {
		      required: true,
		      number: true
		    }
			
		},
		messages: {
			required: "Este campo es obligatorio"
				}
    });

//FIN VALIDACION DEL FORMULARIO DOCUMENTO
//VALIDACION  DEL  FORMULARIO  REGISTRO DOCUMENTO
//--------------- Form validation ------------------//
	$("#form-validate-documento-pre").validate({
    	ignore: null,
    	ignore: 'input[type="hidden"]',
    	rules: {
			nombre_d_pre: "required",
			apellidos_d_pre: "required",
			facultad_d_pre: "required",
			carrera_d_pre: "required",
			tesis_d_pre: "required",
			ci_d: {
		      digits: true,
			  number: true,
			  minlength: 5,
			  maxlength: 8
			},
			fecha_d_pre: {
				required: true,
				minlength: 10,
				maxlength: 10
			},
			tomo_d_pre: {
				number: true
			},
			numero_d_pre: {
				number: true,
				required: true
			},
		    folio_d_pre: {
		      required: true,
		      number: true
		    }
			
		},
		messages: {
			required: "Este campo es obligatorio"
				}
    });

//FIN VALIDACION DEL FORMULARIO DOCUMENTO
//VALIDACION  DEL  FORMULARIO  ACTUALIZACION DOCUMENTO
//--------------- Form validation ------------------//
	$("#form-validate-documento-e").validate({
    	ignore: null,
    	ignore: 'input[type="hidden"]',
    	rules: {
			nombre_d_e: "required",
			apellidos_d_e: "required",
			ref_o_d_e: "required",
			ci_d: {
		      digits: true,
			  number: true,
			  minlength: 5,
			  maxlength: 8
			},
			fecha_d_e: {
				required: true,
				minlength: 10,
				maxlength: 10
			},
			tomo_d_e: {
				number: true
			},
			numero_d_e: {
				number: true,
				required: true
			},
		    folio_d_e: {
		      required: true,
		      number: true
		    }
			
		},
		messages: {
			required: "Este campo es obligatorio"
				}
    });

//FIN VALIDACION DEL FORMULARIO DOCUMENTO

//VALIDACION  DEL  FORMULARIO  ACTUALIZACION DOCUMENTO
//--------------- Form validation ------------------//
	$("#form-validate-documento-pre-e").validate({
    	ignore: null,
    	ignore: 'input[type="hidden"]',
    	rules: {
			nombre_d_e: "required",
			apellidos_d_e: "required",
			ci_d: {
		      digits: true,
			  number: true,
			  minlength: 5,
			  maxlength: 8
			},
			fecha_d_e: {
				required: true,
				minlength: 10,
				maxlength: 10
			},
			tomo_d_e: {
				number: true
			},
			numero_d_e: {
				number: true,
				required: true
			},
		    folio_d_e: {
		      required: true,
		      number: true
		    }
			
		},
		messages: {
			required: "Este campo es obligatorio"
				}
    });

//FIN VALIDACION DEL FORMULARIO DOCUMENTO
//--------------- Form validation ------------------//
	$("#form-validate-documento-pos-e").validate({
    	ignore: null,
    	ignore: 'input[type="hidden"]',
    	rules: {
			nombre_d_pos: "required",
			apellidos_d_pos: "required",
			grado_d_pos: "required",
			tesis_d_pos: "required",
			ci_d: {
		      digits: true,
			  number: true,
			  minlength: 5,
			  maxlength: 8
			},
			fecha_d_pos: {
				required: true,
				minlength: 10,
				maxlength: 10
			},
			tomo_d_pos: {
				number: true
			},
			numero_d_pos: {
				number: true,
				required: true
			},
		    folio_d_pos: {
		      required: true,
		      number: true
		    }
			
		},
		messages: {
			required: "Este campo es obligatorio"
				}
    });

//FIN VALIDACION DEL FORMULARIO DOCUMENTO


//VALIDACION  DEL  FORMULARIO  ACTUALIZACION DEL ARCHIVO DIGITAL DEL DOCUMENTO
//--------------- Form validation ------------------//
	$("#form-validate-update-file-documento").validate({
    	ignore: null,
    	ignore: 'input[type="hidden"]',
    	rules: {
			fileinput: "required",
			
		},
		messages: {
			required: "Campo es necesario"
				}
    });

//FIN VALIDACION DEL FORMULARIO DOCUMENTO

//VALIDACION  DEL  FORMULARIO  ACTUALIZACION DEL ARCHIVO DIGITAL DEL DOCUMENTO
//--------------- Form validation ------------------//
	$("#form-validate-busqueda_resolucion3").validate({
    	ignore: null,
    	ignore: 'input[type="hidden"]',
    	
		nro_reso: {
				number: true,
				required: true
			},
		messages: {
			required: "Campo es necesario"
				}
    });
	
	//VALIDACION  DEL  FORMULARIOS DE DETALLE 
//--------------- Form validation ------------------//
	//$('#tipo_d').select2({placeholder: "Seleccione"});
	//$('#genero_d').select2({placeholder: "Seleccione"});
	//$('#grado_d_pos').select2({placeholder: "Seleccione"});
	
	$("#form-validate-detalle-res").validate({
    	ignore: null,
    	ignore: 'input[type="hidden"]',
    	rules: {
			gestion_res: "required",
			tipo_r: "required",
			id_usuario_r: "required",
			
		},
		messages: {
			required: "Este campo es obligatorio",
			gestion_res: "Gestión es obligatorio"
				}
    });


//------------- Combobox  -------------//
    (function( $ ) {
        $.widget( "ui.combobox", {
            _create: function() {
                var input,
                    self = this,
                    select = this.element.hide(),
                    selected = select.children( ":selected" ),
                    value = selected.val() ? selected.text() : "",
                    wrapper = this.wrapper = $( "<span>" )
                        .addClass( "ui-combobox" )
                        .insertAfter( select );

                input = $( "<input>" )
                    .appendTo( wrapper )
                    .val( value )
                    .addClass( "ui-state-default ui-combobox-input" )
                    .autocomplete({
                        delay: 0,
                        minLength: 0,
                        source: function( request, response ) {
                            var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
                            response( select.children( "option" ).map(function() {
                                var text = $( this ).text();
                                if ( this.value && ( !request.term || matcher.test(text) ) )
                                    return {
                                        label: text.replace(
                                            new RegExp(
                                                "(?![^&;]+;)(?!<[^<>]*)(" +
                                                $.ui.autocomplete.escapeRegex(request.term) +
                                                ")(?![^<>]*>)(?![^&;]+;)", "gi"
                                            ), "<strong>$1</strong>" ),
                                        value: text,
                                        option: this
                                    };
                            }) );
                        },
                        select: function( event, ui ) {
                            ui.item.option.selected = true;
                            self._trigger( "selected", event, {
                                item: ui.item.option
                            });
                        },
                        change: function( event, ui ) {
                            if ( !ui.item ) {
                                var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( $(this).val() ) + "$", "i" ),
                                    valid = false;
                                select.children( "option" ).each(function() {
                                    if ( $( this ).text().match( matcher ) ) {
                                        this.selected = valid = true;
                                        return false;
                                    }
                                });
                                if ( !valid ) {
                                    // remove invalid value, as it didn't match anything
                                    $( this ).val( "" );
                                    select.val( "" );
                                    input.data( "autocomplete" ).term = "";
                                    return false;
                                }
                            }
                        }
                    })
                    .addClass( "ui-widget ui-widget-content ui-corner-left" );

                input.data( "autocomplete" )._renderItem = function( ul, item ) {
                    return $( "<li></li>" )
                        .data( "item.autocomplete", item )
                        .append( "<a>" + item.label + "</a>" )
                        .appendTo( ul );
                };

                $( "<a>" )
                    .attr( "tabIndex", -1 )
                    .attr( "title", "Show All Items" )
                    .appendTo( wrapper )
                    .button({
                        icons: {
                            primary: "ui-icon-triangle-1-s"
                        },
                        text: false
                    })
                    .removeClass( "ui-corner-all" )
                    .addClass( "ui-corner-right ui-combobox-toggle" )
                    .click(function() {
                        // close if already visible
                        if ( input.autocomplete( "widget" ).is( ":visible" ) ) {
                            input.autocomplete( "close" );
                            return;
                        }

                        // work around a bug (likely same cause as #5265)
                        $( this ).blur();

                        // pass empty string as value to search for, displaying all results
                        input.autocomplete( "search", "" );
                        input.focus();
                    });
            },

            destroy: function() {
                this.wrapper.remove();
                this.element.show();
                $.Widget.prototype.destroy.call( this );
            }
        });
    })( jQuery );

    if($("#combobox").length) {
    	$( "#combobox" ).combobox();
    }

	//Boostrap modal
	$('#myModal').modal({ show: false});
	
	//add event to modal after closed
	$('#myModal').on('hidden', function () {
	  	console.log('modal is closed');
	})

});//End document ready functions

//sparkline in sidebar area
var positive = [1,5,3,7,8,6,10];
var negative = [10,6,8,7,3,5,1]
var negative1 = [7,6,8,7,6,5,4]

$('#stat1').sparkline(positive,{
	height:15,
	spotRadius: 0,
	barColor: '#9FC569',
	type: 'bar'
});
$('#stat2').sparkline(negative,{
	height:15,
	spotRadius: 0,
	barColor: '#ED7A53',
	type: 'bar'
});
$('#stat3').sparkline(negative1,{
	height:15,
	spotRadius: 0,
	barColor: '#ED7A53',
	type: 'bar'
});
$('#stat4').sparkline(positive,{
	height:15,
	spotRadius: 0,
	barColor: '#9FC569',
	type: 'bar'
});
//sparkline in widget
$('#stat5').sparkline(positive,{
	height:15,
	spotRadius: 0,
	barColor: '#9FC569',
	type: 'bar'
});

$('#stat6').sparkline(positive, { 
	width: 70,//Width of the chart - Defaults to 'auto' - May be any valid css width - 1.5em, 20px, etc (using a number without a unit specifier won't do what you want) - This option does nothing for bar and tristate chars (see barWidth)
	height: 20,//Height of the chart - Defaults to 'auto' (line height of the containing tag)
	lineColor: '#88bbc8',//Used by line and discrete charts to specify the colour of the line drawn as a CSS values string
	fillColor: '#f2f7f9',//Specify the colour used to fill the area under the graph as a CSS value. Set to false to disable fill
	spotColor: '#e72828',//The CSS colour of the final value marker. Set to false or an empty string to hide it
	maxSpotColor: '#005e20',//The CSS colour of the marker displayed for the maximum value. Set to false or an empty string to hide it
	minSpotColor: '#f7941d',//The CSS colour of the marker displayed for the mimum value. Set to false or an empty string to hide it
	spotRadius: 3,//Radius of all spot markers, In pixels (default: 1.5) - Integer
	lineWidth: 2//In pixels (default: 1) - Integer
});