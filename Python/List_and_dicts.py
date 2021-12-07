def run():
    my_list=[1,"Hello",True,4.5]
    my_dict={"firstname":"Jaime","lastname":"Falla"}

    super_list=[
        {"firstname":"Luisa","lastname":"Falla"},
        {"firstname":"Lina","lastname":"Falla"},
        {"firstname":"Paola","lastname":"Falla"}
    ]

    super_dict={
        "natural_nums":[1,2,3,4,5],
        "integer_nums":[-2,-1,0,1,2]
    }

    for key,value in super_dict.items():
        print(key,"-",value)

if __name__== '__main__':
    run()