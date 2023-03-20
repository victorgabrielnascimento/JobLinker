const mongoose = require('mongoose');

import { IUser } from "../interfaces/user/user.interface";
import {  IApplicant } from "../interfaces/user/applicant.interface";
import {  ICompany } from "../interfaces/user/company.interface";

const IAdress = require ("../interfaces/user/adress.interface");
const ICertification = require("../interfaces/user/applicant.interface");
const  IExperiency = require ("../interfaces/user/applicant.interface");


const User: IUser = mongoose.model('user', {
    nome: String,
    cpf_cnpj: String,
    telefone: String,
    endereco: IAdress,
    email: String,
    senha: String,
    role: Number,
    data_cadastro: Date
});

const Applicant: IApplicant = mongoose.model('user', {
    nome: String,
    cpf_cnpj: String,
    telefone: String,
    endereco: IAdress,
    email: String,
    senha: String,
    role: Number,
    data_cadastro: Date,
    cargo_pretendido: String,
    pretensao_salarial: Number,
    sobre_mim: String,
    formacao_academica: [String],
    cerficacoes: [ICertification],
    experiencias_profissionais: [IExperiency],
    idiomas: [String],
    interesses: [String],
    // referencias_profissionais: string[]; pra depois
    url_foto: String,
    matches: [String],
    liked: [String],
    likes: Number,
    max_likes: Number
});

const Company: ICompany = mongoose.model('user', {
    nome: String,
    cpf_cnpj: String,
    telefone: String,
    endereco: IAdress,
    email: String,
    senha: String,
    role: Number,
    data_cadastro: Date,
    area_atuacao: String,
    vagas: [String],
    likes: [String], //uuid das pessoas
    matches: [String], //uuid das pessoas
});

module.exports = { User, Applicant, Company };

export {};
