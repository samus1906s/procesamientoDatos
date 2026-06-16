export function calcularCobro (req, res){
 const{placa, tipo, horas, minutos} = req.body;

if(!placa || placa.trim()==""){
    return res.status(400).json({error: "La placa es requerida"})
}

if(!tipo || (!tipo=="carro" && tipo=="moto")){
    return res.status(400).json({error: "El tipo es requerido"})
}



if (Number.isNaN(horas) || horas < 0){
   return res.status(400).json({error: "La cantidad de horas ingresadas"}) 
}



if (Number.isNaN(horas) || horas < 0 || minutos > 59){
   return res.status(400).json({error: "La cantidad de horas ingresadas"}) 
}

const tarifa=tipo==="carro"? 1200 : 500

let h=Number(horas);
let m=Number(minutos);

if(m>5) h++;

const total=h*tarifa;

res.json({
    placa: placa,
    tipo: tipo,
    tarifa: tarifa,
    tiempoEnUso: horas + ":" + minutos,
    horaCobradas: h,
    total: total
});   
}