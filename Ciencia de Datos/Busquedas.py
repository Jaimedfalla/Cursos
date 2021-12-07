import random
from re import match
from typing import Match

class Searcher:

    def __init__(self):
        self._counter = 0

    @property
    def Counter(self):
        return self._counter

    def lineal_search(self,list, target):
        match = False
        for element in list:
            match = element == target
            self._counter += 1
            if match:
                break

        return match

    def binary_search(self,list,lowerIndex,higherIndex,target):
        if lowerIndex > higherIndex:
            return False

        middle = (lowerIndex + higherIndex) // 2
        self._counter += 1
        print(f'Intento #{self._counter}. Buscando {target} entre {list[lowerIndex]} y {list[higherIndex - 1]}')

        if list[middle]==target:
            return True
        elif list[middle]<target:
            return self.binary_search(list,middle+1,higherIndex,target)
        else:
            return self.binary_search(list,lowerIndex,middle-1,target)

if __name__=='__main__':
    size_list = int(input("What is the size of list?"))
    target = int(input("What number do you find?"))

    searcher = Searcher()

    list = sorted([random.randint(0,100) for i in range(size_list)])
    
    #match = searcher.lineal_search(list,target)
    match = searcher.binary_search(list,0,len(list),target)

    print(list)
    print(f'El elemento {target} {"está" if match else "no está"} en la lista. Número de intentos: {searcher.Counter}')