const { alunos } = require("./alunos");

function listarAluno() {
    try {
      console.table(alunos)
    } catch (error) {
      console.error("Erro ao listar alunos",error.message);
    }
  }

module.exports = { listarAluno };