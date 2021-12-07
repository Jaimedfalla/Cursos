capital = {"Guatemala": "Ciudad de Guatemala", "El Salvador": "San Salvador",
"Honduras": "Honduras","Nicaragua": "Managua", "Costa Rica": "San Jose", "Panama": "Panama",
"Argentina": "Buenos Aires", "Colombia": "Bogota", "Venezuela": "Caracas", "España": "Madrid"}

def findCapital():
    country = input("Write a country to find its capital: ").title()
    assert country in capital,"Capital of Country does not exist"
    print(capital[country])

if __name__=='__main__':
    findCapital()