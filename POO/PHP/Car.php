<?php
    require_once('Account.php');
    
    class Car{
        private $id;
        private $license;
        private $driver;
        private $passenger;

        public function __construct($license,$driver,$passenger){
            $this->id = $this->createGuid();
            $this->license = $license;
            $this->driver =$driver;
            $this->passenger = $passenger;
        }

        public function toString(){
            return "Id: '{$this->id}', My License is '{$this->license}', my driver is:{$this->driver->toString()},
                    and I made for {$this->passenger} passengers";
        }

        function createGuid(){
            if (function_exists('com_create_guid') === true)
                return trim(com_create_guid(), '{}');

            $data = openssl_random_pseudo_bytes(16);
            $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
            $data[8] = chr(ord($data[8]) & 0x3f | 0x80);
            return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
        }
    }
?>