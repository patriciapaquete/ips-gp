const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Entidade = new Schema({
    entidadeId: mongoose.ObjectId,
    predefinido: Boolean,
    nome : String
})

var Utilizador = new Schema({
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
    projetosFavoritos: [Projeto.projetoId]
})

var Inscricao = new Schema({
    inscricaoId : mongoose.ObjectId,
    utilizadorId : Utilizador.utilizadorId,
    projetoId : Projeto.projetoId,
    presente: Boolean,
    avaliacao : [{valor: Number, descricao: String}],
    cancelado : Boolean,
})

var CategoriaProjeto = new Schema({
    categoriaId: mongoose.ObjectId,
    predefinido: Boolean,
    nome: String
})

var PublicoAlvo = new Schema({
    publicoAlvoId: mongoose.ObjectId,
    descricao: String,
    predefinido: Boolean
})

var Projeto = new Schema({
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
})