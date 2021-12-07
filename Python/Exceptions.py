def getDivisors(number):
    assert number > 0,"Ingrese un número positivo mayor a 0"
    return [i for i in range(1,number + 1) if number%i==0]

def run():
    try:
        number = int(input("Ingrese un número: "),0)

        print(getDivisors(number))
    except ValueError as ve:
        print("Valor ingresado inválido")

if __name__=='__main__':
    run()