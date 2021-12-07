class Alumno:
    def setData(self,nombre,nota):
        self.nombre = nombre
        self.nota = nota

    def __str__(self):
        msg = "aprove"
        
        if self.nota < 5:
            msg ="do not " + msg

        return "The student {} {} with a calification: {}".format(self.nombre,msg,self.nota)

def getData():
    name = input("Type the student name: ")
    note = 0
    while True:
        try:
            note = float(input("Type the subject note: "))
            assert 0 <= note <=10, "The note must be between 0 and 10"
            student = Alumno()
            student.setData(name.upper(),note)
            print(student)
            break
        except ValueError:
            print("The note must be a number")

if __name__=='__main__':
    getData()
