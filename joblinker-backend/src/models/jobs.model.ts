const mongoose = require('mongoose');

import { IJob } from "../interfaces/job.interface";

const Job: IJob = mongoose.model('job', {
    titulo: String,
    descricao: String,
    requisitos: [String],
    salario: Number,
    tipo_vaga_periodo: String,
    beneficios: [String],
    jornada_trabalho: String,
    data_cadastro: Date
});

module.exports =  { Job };
export {};

