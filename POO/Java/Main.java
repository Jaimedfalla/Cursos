package POO.Java;

class Main{
    public static void main(String[] args) {
        Car car = new Car("AAA999",new Account("Pepito Perez","999999","aaaaa@yopmail.com"),5);
        System.out.println(car.toString());
    }   
}