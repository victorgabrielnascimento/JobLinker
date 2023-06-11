// @/index.ts -> server-application load
require('dotenv').config();
import "reflect-metadata";

import express, { Request, Response, Express } from "express";

import ApplicantRouter from "./app/routes/applicant.route";
import CompanyRouter from "./app/routes/company.route";
import ManagementRouter from "./app/routes/management.route";

//connection
const app: Express = express();
app.use(express.json());
app.use(ApplicantRouter);
app.use(CompanyRouter);
app.use(ManagementRouter);

//db connection
(async () => { await require('./models/index').sequelize.sync(); })();

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