<?php
    class Car{
        public $id;
        public $license;
        public $driver;
        public $passenger;

        public function __constructor($license,$driver,$passenger){
            $this->$id = com_create_guid();
            $this->$license = $license;
            $this->$driver =$driver;
            $this->$passenger = $passenger;
        }

        function toString(){
            return "Id: $this->$id,My License is $this->$license,my driver is $this->$driver.toString(),
                    and I made for $this->$passenger passengers";
        }
    }
?>