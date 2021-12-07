import math

def run():
    #Esto es un Dictionary Comprehension
    numbers = {i:round(math.sqrt(i),2) for i in range(1,1001)}
    print(numbers)

if __name__=='__main__':
    run()