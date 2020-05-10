const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var EntidadeSchema = new Schema({
//     entidadeId: mongoose.ObjectId,
//     predefinido: Boolean,
//     nome : String,
// });

var UtilizadorSchema = new Schema({
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
    // entidades: [{entidadeId: EntidadeSchema.entidadeId}],
    externo: Boolean,
    dataCriacao: Date,
    fotoPerfilCaminho: String,
    //projetosFavoritos: [projetoId]
});

// var InscricaoSchema = new Schema({
//     inscricaoId : mongoose.ObjectId,
//     utilizadorId : UtilizadorSchema.utilizadorId,
//     projetoId : ProjetoSchema.projetoId,
//     presente: Boolean,
//     avaliacao : [{valor: Number, descricao: String}],
//     cancelado : Boolean,
// })

// var CategoriaProjetoSchema = new Schema({
//     categoriaId: mongoose.ObjectId,
//     predefinido: Boolean,
//     nome: String
// })

// var PublicoAlvoSchema = new Schema({
//     publicoAlvoId: mongoose.ObjectId,
//     descricao: String,
//     predefinido: Boolean
// })

// var ProjetoSchema = new Schema({
//     projetoId: mongoose.ObjectId,
//     nome: String,
//     resumo: String,
//     responsavelId: UtilizadorSchema.utilizadorId,
//     categorias: [{categoriaId: Categoria.categoriaId}],
//     palavrasChave: [{nome: String}],
//     contactos: [{contacto: String, descricao: String}],
//     publicoAlvoId: PublicoAlvoSchema.publicoAlvoId,
//     formacoesNecessarias: [{nome: String}],
//     logotipoCaminho: String,
//     XemXTempo: String,
//     edicoes: [{
//         aprovado: Boolean,
//         gestores: [{gestorId: UtilizadorSchema.utilizadorId}],
//         comentarios: [{comentario: String, utilizadorId: UtilizadorSchema.utilizadorId, dataCriacao: Date}],
//         fotosCaminho: [{caminho: String}],
//         vagas: Number,
//         horarios: [{descricao: String, dataAcontecimento: Date}],
//         capaCaminho: String,
//         ficheirosCaminho: [{caminho: String}],
//         projetoMes: Boolean,
//         dataCriacao: Date,
//         dataTermino: Date,
//         dataFechoInscricoes: Date,
//         dataComeco: Date
//     }]
// })

const Utilizadores =  mongoose.model('Utilizador',UtilizadorSchema);
// const Entidade =  mongoose.model('Entidade',EntidadeSchema);
// const Inscricao =  mongoose.model('Inscricao',InscricaoSchema);
// const CategoriaProjeto =  mongoose.model('CategoriaProjeto',CategoriaProjetoSchema);
// const PublicoAlvo =  mongoose.model('PublicoAlvo',PublicoAlvoSchema);
// const Projeto =  mongoose.model('Projeto',ProjetoSchema);

module.exports= {
    Utilizadores : Utilizadores,
    // Entidade : Entidade,
    // Inscricao : Inscricao,
    // CategoriaProjeto : CategoriaProjeto,
    // PublicoAlvo : PublicoAlvo,
    // Projeto : Projeto
}
