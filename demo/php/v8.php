<?php
    $v8 = new V8Js();
    $codigo_js = file_get_contents('demo\p5\p5.js');
    $resultado = $v8->executeString($codigo_js);
    echo $resultado;
?>