numeros = []
multiply = [4,7,9]

def crear():
    for i in range(10):
        valor = i +1
        if valor in multiply:
            valor = valor * 2

        numeros.append(valor)

    print(numeros)

if __name__=='__main__':
    crear()