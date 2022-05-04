let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url) =>{
    return new Promise((resolve,reject)=>{
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET',url,true);

        xhttp.onreadystatechange = (()=>{
            if(xhttp.readyState===4){
                (xhttp.status===200)?
                    resolve(JSON.parse(xhttp.responseText)):
                    reject(new Error(`Error ${url}`));
            }
        });
        xhttp.send();
    });
}

/*Se utiliza module.exports porque se utiliza node y este utiliza common js
* y este no utiliza el import y export default*/
module.exports = fetchData;