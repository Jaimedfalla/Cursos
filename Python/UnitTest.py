import unittest

def add(num_1,num_2):
    return num_1 + num_2

def is_Adult(age):
    return age > 18

class BlackBoxTester(unittest.TestCase):
    
    def test_add(self):
        num_1=10
        num_2=5

        result = add(num_1,num_2)
        self.assertEqual(result,15)

    #El nombre de las pruebas siempre debe comenzar con la palabra test
    def test_add_negative_numbers(self):
        num_1 = -10
        num_2= - 7

        result = add(num_1,num_2)
        self.assertEqual(result,-17)

class CrystalBoxTexter(unittest.TestCase):

    def test_is_adult(self):
        age = 20
        result = is_Adult(age)
        self.assertEqual(result, True)

    def test_is_Child(self):
        age = 14
        result = is_Adult(age)
        self.assertEqual(result,False)

if __name__=='__main__':
    unittest.main(verbosity=2) # Se agrega el parámetro verbosity=2 para que la salida de
                                #las pruebas en al consola sea más detallado