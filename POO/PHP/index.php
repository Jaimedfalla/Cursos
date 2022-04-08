<?php
    require_once('Car.php');
    require_once('UberX.php');
    require_once('Account.php');

    $uberX = new UberX("AKC938",new Account("adaodjado","da99889"),"Chevrolet","Spark");

    print($uberX->toString());
?> 