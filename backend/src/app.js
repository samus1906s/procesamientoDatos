import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const NAME = process.env.SERVER_NAME;
const VERSION = process.env.SERVER_VERSION;
const DESCRIPTION = process.env.SERVER_DESCRIPTION;
const PORT = process.env.SERVER_PORT || 4000;

const app = express();


app.get( '/', (reg, res) => {
    res.send( '<h1>Servidor funcionando</h1>')
});

app.listen(PORT, () => {
  console.log(`API ejecutándose en http://localhost:${PORT}`);
});