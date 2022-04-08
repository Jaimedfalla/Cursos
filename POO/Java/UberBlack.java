package POO.Java;

import java.util.ArrayList;
import java.util.Map;

public class UberBlack extends Car {
    private Map<String, Map<String,Integer>> typeCarAccepted;
    private ArrayList<String> seatsMaterial;
    
    public UberBlack(String license, Account driver,
                        Map<String, Map<String,Integer>> typeCarAccepted,
                        ArrayList<String> seatsMaterial) {
        super(license,driver,1);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
    }
}
