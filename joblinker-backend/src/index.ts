// @/index.ts -> server-application load
// sususus usussuusuu
require('dotenv').config();
import "reflect-metadata";
import express, { Request, Response, Express } from "express";



//connection
const app: Express = express();

app.use(express.json());



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