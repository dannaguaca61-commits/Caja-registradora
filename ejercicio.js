const prompt=require("prompt-sync")();

let total=0;
let cantidad=0;
let precio;

do{
    
let entrada=prompt("Ingrese el precio del producto (0 para terminar): ");

if(entrada==="null" || entrada===""){
    console.log("Compra finalizada por el usuario.");
    break;
}

precio=Number(entrada);

if(isNaN(precio) || precio < 0){
    console.log("Error: Ingrese un precio válido.");
    precio=-1;
    continue;
}

if(precio === 0){
    break;
}

total=total + precio;
cantidad++;
console.log("Subtotal:"+ total);

} while (precio !== 0);
console.log("Cantidad de productos: " + cantidad);
console.log("TOTAL A PAGAR:" + total);