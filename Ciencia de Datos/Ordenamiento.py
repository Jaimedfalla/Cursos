import random

class Organizer:

    def merge_sort(self,list):
        print(f'ingreso a función con la lista:{list}')

        if len(list)>1:
            middle = len(list)//2
            left = list[:middle]
            right = list[middle:]

            self.merge_sort(left)
            self.merge_sort(right)

            print(f'left {left}, rigth {right}')
            print(list)
            
            i=0
            j=0
            k=0

            while i<len(left) and j<len(right):
                if left[i]<right[j]:
                    list[k]=left[i]
                    i+=1
                else:
                    list[k]=right[j]
                    j +=1

                k += 1
                print(f'i={i},j={j}, k={k}')
            
            while i < len(left):
                list[k]=left[i]
                i+=1
                k+=1

            while j<len(right):
                list[k]=right[j]
                j+=1
                k+=1

            print('-'*50)

if __name__=='__main__':
    size_list = int(input("What is the size of list?"))

    searcher = Organizer()

    list = [random.randint(0,100) for i in range(size_list)]

    match = searcher.merge_sort(list)

    print(list)