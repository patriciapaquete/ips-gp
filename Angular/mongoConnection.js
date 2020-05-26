const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entidadeSchema = new Schema({
    entidadeId: mongoose.ObjectId,
    predefinido: Boolean,
    nome : String
});
var Entidade = mongoose.model('Entidade', entidadeSchema);

var utilizadorSchema = new Schema({
    utilizadorId: mongoose.ObjectId,
    email: String,
    password: String,
    nome: String,
    genero: {
        type: String,
        enum: ["Masculino", "Feminino", "Outro"]
    },
    dataDeNascimento: Date,
    comissaoGestao: Boolean,
    aprovado: Boolean,
    entidades: [{entidadeId: Entidade.entidadeId}],
    externo: Boolean,
    dataCriacao: Date,
    fotoPerfilCaminho: String,
    projetosFavoritos: [projetoId]
});
var Utilizador = mongoose.model('Utilizador', utilizadorSchema);

var inscricaoSchema = new Schema({
    inscricaoId : mongoose.ObjectId,
    utilizadorId : Utilizador.utilizadorId,
    projetoId : Projeto.projetoId,
    presente: Boolean,
    avaliacao : [{valor: Number, descricao: String}],
    cancelado : Boolean,
});
var Inscricao = mongoose.model('Inscricao', inscricaoSchema);

var categoriaProjetoSchema = new Schema({
    categoriaId: mongoose.ObjectId,
    predefinido: Boolean,
    nome: String
});
var CategoriaProjeto = mongoose.model('CategoriaProjeto', categoriaProjetoSchema);

var publicoAlvoSchema = new Schema({
    publicoAlvoId: mongoose.ObjectId,
    descricao: String,
    predefinido: Boolean
});
var PublicoAlvo = mongoose.model('PublicoAlvo', publicoAlvoSchema);

var projetoSchema = new Schema({
    projetoId: mongoose.ObjectId,
    nome: String,
    resumo: String,
    responsavelId: Utilizador.utilizadorId,
    categorias: [{categoriaId: Categoria.categoriaId}],
    palavrasChave: [{nome: String}],
    contactos: [{contacto: String, descricao: String}],
    publicoAlvoId: PublicoAlvo.publicoAlvoId,
    formacoesNecessarias: [{nome: String}],
    logotipoCaminho: String,
    XemXTempo: String,
    edicoes: [{
        aprovado: Boolean,
        gestores: [{gestorId: Utilizador.utilizadorId}],
        comentarios: [{comentario: String, utilizadorId: Utilizador.utilizadorId, dataCriacao: Date}],
        fotosCaminho: [{caminho: String}],
        vagas: Number,
        horarios: [{descricao: String, dataAcontecimento: Date}],
        capaCaminho: String,
        ficheirosCaminho: [{caminho: String}],
        projetoMes: Boolean,
        dataCriacao: Date,
        dataTermino: Date,
        dataFechoInscricoes: Date,
        dataComeco: Date
    }]
});
var Projeto = mongoose.model('Projeto', projetoSchema);

module.exports = {
    Projeto: Projeto,
    PublicoAlvo: PublicoAlvo,
    Entidade: Entidade,
    CategoriaProjeto: CategoriaProjeto,
    Inscricao: Inscricao,
    Utilizador: Utilizador
}