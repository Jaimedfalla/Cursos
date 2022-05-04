const somethingWillHappen = ()=>{
    return new Promise((resolve,reject)=>{
        if(false){
            resolve('Hey!');
        }
        else{
            reject('Whoops!');
        }
    });
}

somethingWillHappen()
.then(response => console.log(response)) //cuando se resuelve la promesa
.catch(error => console.log(error)) //Cuando se rechaza la promesa