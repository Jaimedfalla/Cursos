numeros = [20,50,"Curso",'Python',3.14]

def llenar():
    seq = 0
    while seq < 2:
        try:
            text = input("input a text: ")

            numeros[seq] = text
            seq +=1
        except:
            print("invalid input")
    
    print(numeros)

if __name__ == '__main__':
    llenar()