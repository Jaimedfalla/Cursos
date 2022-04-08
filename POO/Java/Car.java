package POO.Java;

import java.util.UUID;

public class Car {
    UUID id;
    String license;
    Account driver;
    Integer passenger;

    public Car(String license,Account driver,Integer passenger){
        id = UUID.randomUUID();
        this.license = license;
        this.driver = driver;
        this.passenger = passenger;
    }

    @Override
    public String toString(){
        return String.format("Id: %s, License: %s, Driver: %s, N° passenger: %d",
        this.id,this.license,this.driver.name,this.passenger);
    }
}
