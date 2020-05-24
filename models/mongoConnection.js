const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntidadeSchema = new Schema({
    entidadeId: mongoose.ObjectId,
    predefinido: Boolean,
    nome : String,
});

var CategoriaProjetoSchema = new Schema({
  categoriaId: mongoose.ObjectId,
  predefinido: Boolean,
  nome: String
});

var PublicoAlvoSchema = new Schema({
  publicoAlvoId: mongoose.ObjectId,
  descricao: String,
  predefinido: Boolean
});

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
  tipoMembro: String,
  aprovado: Boolean,
  entidades: [{entidadeId: mongoose.ObjectId}],
  externo: Boolean,
  dataCriacao: Date,
  fotoPerfilCaminho: String,
  projetosFavoritos: [mongoose.ObjectId],
  areasInteresse: [{type:String}],
  numeroTelefone: Number,
  distrito: String,
  concelho: String,
  escola: String,
  formacao: String
});

var ProjetoSchema = new Schema({
  projetoId: mongoose.ObjectId,
  nome: String,
  resumo: String,
  responsavelId: mongoose.ObjectId,
  categorias: [{categoriaId: mongoose.ObjectId}],
  palavrasChave: [{nome: String}],
  contactos: [{contacto: String, descricao: String}],
  publicoAlvoId: mongoose.ObjectId,
  formacoesNecessarias: [{nome: String}],
  logotipoCaminho: String,
  XemXTempo: String,
  edicoes: [{
      aprovado: Boolean,
      gestores: [{gestorId: mongoose.ObjectId}],
      comentarios: [{comentario: String, utilizadorId: mongoose.ObjectId, dataCriacao: Date}],
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

var InscricaoSchema = new Schema({
    inscricaoId : mongoose.ObjectId,
    utilizadorId : mongoose.ObjectId,
    projetoId : mongoose.ObjectId,
    presente: Boolean,
    avaliacao : [{valor: Number, descricao: String}],
    cancelado : Boolean,
})

const Utilizadores =  mongoose.model('Utilizador',UtilizadorSchema);
 const Entidade =  mongoose.model('Entidade',EntidadeSchema);
 const Inscricao =  mongoose.model('Inscricao',InscricaoSchema);
 const CategoriaProjeto =  mongoose.model('CategoriaProjeto',CategoriaProjetoSchema);
 const PublicoAlvo =  mongoose.model('PublicoAlvo',PublicoAlvoSchema);
 const Projeto =  mongoose.model('Projeto',ProjetoSchema);

module.exports= {
    Utilizadores : Utilizadores,
     Entidade : Entidade,
     Inscricao : Inscricao,
     CategoriaProjeto : CategoriaProjeto,
     PublicoAlvo : PublicoAlvo,
     Projeto : Projeto
}
