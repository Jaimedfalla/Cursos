<?php
    require_once('Car.php');
    
    class UberX extends Car{
        private $brand;
        private $model;

        public function __construct($license,$driver,$brand,$model){
            parent::__construct($license,$driver,1);
            $this->brand=$brand;
            $this->model = $model;
        }
    }
?>