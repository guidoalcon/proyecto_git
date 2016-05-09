<?php 
		
        @session_start();
        if(isset($_SESSION['user']) == false){
            header('Location: ../index.php');
            echo '<script type="text/javascript">
				window.location="../index.php";
				</script>';
            exit;
        }elseif(isset($_SESSION['user'])){
            header('Location: ../modulos/views/inicio/inicio.php');
        }
?>