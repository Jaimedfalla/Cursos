class MyMath{
    static readonly PI = 3.14;

    static max(...numbers:number[]):number{
        return numbers.reduce((max,item)=> max >= item?max:item,numbers[0]);
    }
}

console.log('MyMath.PI0',MyMath.max(-8,-1,-9));