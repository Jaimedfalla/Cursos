def absolut(number):
    value = number

    if number < 0:
        value = value * -1

    return value

def run():
    try:
        number = int(input("ingrese un número entero: "))
        print("El valor absoluto del número: {} es: {}".format(number,absolut(number)))
    except:
        print("El valor ingresado no es un número")

if __name__=='__main__':
    run()