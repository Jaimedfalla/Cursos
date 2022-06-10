const currencyFormatter = new Intl.NumberFormat('es-CO',{
    style:'currency',currency:'COP'
});

const amountCurrency = (amount)=>{
    return currencyFormatter.format(amount)
};

export {amountCurrency}