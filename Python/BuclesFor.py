def tramp():
    min = getNumber()
    max = getNumber()+1

    assert min < max, "{} is not lower than {}".format(min,max)
    
    print([i for i in range(min,max)])

def getNumber():
    while True:
        try:
            number=int(input("Type a number: "))
            assert number > 0,"the number must be greater than 0"

            return number
        except ValueError:
            print("Invalid number")

if __name__=='__main__':
    tramp()