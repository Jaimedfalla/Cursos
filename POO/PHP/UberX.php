<?php
    require_once('Car.php');
    
    class UberX extends Car{
        public $brand;
        public $model;

        public function __constructor($license,$driver,$brand,$model){
            parent::__construct($license,$driver,1);
            $this->$brand=$brand;
            $this->$model = $model;
        }
    }
?>