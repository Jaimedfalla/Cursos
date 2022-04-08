<?php
    class Account{
        public $id;
        public $name;
        public $document;
        public $email;
        public $password;
        
        public function __construct($name,$document){
            $this->name =$name;
            $this->document = $document;
        }

        public function toString(){
            return "I am a driver, my name is '{$this->name}' and my document is '{$this->document}'";
        }
    }
?>