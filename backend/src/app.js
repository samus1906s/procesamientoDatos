import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const NAME = process.env.SERVER_NAME;
const VERSION = process.env.SERVER_VERSION;
const DESCRIPTION = process.env.SERVER_DESCRIPTION;
const PORT = process.env.SERVER_PORT || 4000;



const app = express();

app.use(cors());
app.use(express.json());


app.get( '/', (reg, res) => {
    res.json({
        name: NAME,
        version: VERSION,
        description: DESCRIPTION,
        puerto: PORT
    })
});

app.post('/api/parqueo/calcular', (req, res ) => {
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

});

app.listen(PORT, () => {
  console.log(`API ejecutándose en http://localhost:${PORT}`);
});

