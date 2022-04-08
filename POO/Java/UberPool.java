package POO.Java;

public class UberPool extends Car {
    private String brand;
    private String model;

    public UberPool(String license,Account driver,String brand, String model) {
        super(license,driver,4);
        this.brand=brand;
        this.model = model;
    }
}
