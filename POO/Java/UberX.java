package POO.Java;

class UberX extends Car{
    private String brand;
    private String model;

    public UberX(String license,Account driver,String brand,String model ){
        super(license,driver,1);
        this.brand = brand;
        this.model = model;
    }
}