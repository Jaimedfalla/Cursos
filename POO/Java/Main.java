package POO.Java;

class Main{
    public static void main(String[] args) {
        Car car = new Car("NER635",new Account("Jaime Falla","999999","aaaaa@yopmail.com"),5);
        System.out.println(car.toString());
    }   
}