// @/index.ts -> server-application load
require('dotenv').config();
import "reflect-metadata";
import express, { Request, Response, Express } from "express";


// import { SeguradoraRouter } from './routes/seguradora.routes';
// import { UsuarioRouter } from './routes/usuario.routes';
// import { VeiculoRouter } from './routes/veiculo.routes';
// import { SinistroRouter } from "./routes/sinistro.routes";

//connection
const app: Express = express();

app.use(express.json());
// app.use(SeguradoraRouter, UsuarioRouter, VeiculoRouter, SinistroRouter);



//home request
app.get("/", (req: Request, res: Response): Response => {
  return res.send({message: 'Bem vindo a API!'});
});

//server-application start
const start = async (): Promise<void> => {
  try {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`API rodando na porta ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();