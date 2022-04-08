package POO.Java;

import java.util.UUID;

public class Account {
    UUID id;
    String name;
    String document;
    String email;
    String password;

    public Account(String name,String document, String email){
        id = UUID.randomUUID();
        this.name= name;
        this.document = document;
        this.email= email;
    }
}
