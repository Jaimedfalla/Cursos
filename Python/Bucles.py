def multiply():
    while True:
        try:
            number=int(input("multiplication table of: "))
            assert number > 0,"the number must be greater than 0"

            multiplication = ["{} x {} = {}".format(number,i,number*i) for i in range(1,11)]
            print(multiplication)
            break
        except ValueError:
            print("Invalid number")

if __name__=='__main__':
    multiply()