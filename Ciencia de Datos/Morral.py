class Bag:
    
    def __init__(self,weights,values,n):
        self.weights = weights
        self.values = values
        self.n = n

    def fill(self,size):
        if self.n==0 or size==0:
            return 0

        original = self.n
        self.n -= 1
        print(f'Size: {size}',f'n: {original}',f'weight={self.weights[self.n]}',f'n-1={self.n}',f'value_n-1={self.values[self.n]}')

        if self.weights[self.n]>size:
            return self.fill(size)

        x1 = self.values[self.n] + self.fill(size - self.weights[self.n])
        x2 = self.fill(size)

        print(f'x1={x1},x2={x2}')
        maximum = max(x1,x2)
        print(f'max={maximum}')
        return maximum

class Program:

    def run(self):
        values = [60,100,120]
        weights = [10,20,30]
        n = len(values)
        size = self.getSize()
        bag = Bag(weights,values,n)
        result = bag.fill(size)
        print(result)

    def getSize(self):
        try:
            size = int(input("Type the bag size: "))
            assert 0 <= size, "The size must be greater than 0"
            return size
        except:
            print("El valor ingresado no es un número")

if __name__=='__main__':
    program = Program()
    program.run()