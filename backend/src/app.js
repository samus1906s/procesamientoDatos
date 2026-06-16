import express from 'express';

const app = express();

app.get( "/", (reg, res) => {
    res.send( <h1>Servidor funcionando</h1>)
});

app.listen( () => {
  console.log(`API ejecutándose en 4000 `);
});