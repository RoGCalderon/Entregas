function gastoConIva(numero) {
    return numero * 1.21;
}

let precios = [100, 150, 250, 370, 450];

function map(array, callback) {
    let preciosConIva = precios.map(gastoConIva);
    return preciosConIva;
}

map(precios, gastoConIva);