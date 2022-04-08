import uuid

class Car:
    id = int
    license = str
    driver = str
    passenger = int

    def __init__(self,license, driver, passenger) -> None:
        self.id = uuid.uuid4()
        self.license = license
        self.driver = driver
        self.passenger = passenger

    def __str__(self):
        return "Id: {}, My License is {}, my driver is {} and I made for {} passengers".format(self.id,self.license,self.driver, self.passenger)
    
