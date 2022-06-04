const currencyFormatter = new Intl.NumberFormat('es-CO',{
    style:'currency',currency:'COP'
});

const amountCurrency = (amount)=>{
    console.log("amount",amount);
    return currencyFormatter.format(amount)
};

export {amountCurrency}