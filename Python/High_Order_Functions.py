def run():
    numbers = [1,2,3,4,5]
    #Filter, Map, y Reduce son funciones de orden superior
    #quiere decir funciones que reciben como parámetro otras funciones
    squares = list(map(lambda x:x**2,numbers))
    print(squares)

if __name__=='__main__':
    run()