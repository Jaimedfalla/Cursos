class Factory:
    def __init__(self,tires, color,price):
        self.tires = tires
        self.color = color
        self.price = price

    def __str__(self):
        return "I have {} tires, my color is {} and my price is ${}".format(self.tires,self.color,self.price)

class Moto(Factory):
    def __init__(self,color,price):
        super().__init__(2, color, price)

class Car(Factory):
    def __init__(self, color, price):
        super().__init__(4, color, price)

def run():
    renault = Car('red',30000)
    biwis = Moto('Blue',2500)

    print(renault)
    print(biwis)

if __name__ == '__main__':
    run()