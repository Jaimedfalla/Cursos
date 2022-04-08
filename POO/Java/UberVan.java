package POO.Java;

import java.util.Map;
import java.util.ArrayList;

public class UberVan extends Car {
    
    private Map<String, Map<String,Integer>> typeCarAccepted;
    private ArrayList<String> seatsMaterial;

    public UberVan(String license, Account driver,
                    Map<String, Map<String,Integer>> typeCarAccepted,
                    ArrayList<String> seatsMaterial) {
        super(license,driver,1);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
    }
}
