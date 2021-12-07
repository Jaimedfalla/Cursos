from typing import overload


class Marino:
    def Hablar(self):
        print("Hola...")

class Pulpo(Marino):
    def Hablar(self):
        print("Soy un pulpo")

class Foca:
    def Hablar(self,mensaje):
        self.mensaje = mensaje
        print(self.mensaje)