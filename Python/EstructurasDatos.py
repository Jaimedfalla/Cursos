months = 'January','Frebuary','March','April','May','June','July','August','September','October','November','December'

def selectMonth():
    try:
        number = int(input("Type a number: "))
        assert number <= (months.__len__()) and number >= 0,"The number must be between 1 and 12";
        print(months[number-1])
    except TypeError as te:
        print("Invalid value")


if __name__=='__main__':
    selectMonth()