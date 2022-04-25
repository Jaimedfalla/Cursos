const nameInput ="lado_figura";
const ladoCuadrado = document.getElementById(nameInput);
const pattern = /^\+?\d+$/;
const formSquare = document.getElementById("form-figura");
const shape = "square";

$('input[type="radio"]').on('change', (e) => {

});

let calcularPerimetroCuadrado = () => {
    if(Math.sign(ladoCuadrado)<1 || !pattern.test(ladoCuadrado))
    {
        cleanInput();
        throw "Invalid value";
    }

    let perimeter = ladoCuadrado.value * 4;
    alert(`El perímetro del cuadrado es: ${perimeter} cm`);
}

let cleanInput = () => document.getElementById(nameInput).value = "";