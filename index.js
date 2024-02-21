import  express  from 'express';
import process from 'process';
import path from 'path';

const host = 'localhost';
const porta = 3000;

const app = express();

app.use(express.static(path.join(process.cwd(), 'publico', 'site.html')));

app.listen(porta, host, ()=>{
    console.log(`Servidor escutando em http://${host}:${porta}`)
})