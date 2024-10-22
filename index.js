const prompt = require("prompt-sync")();
const { criarAluno } = require("./alunos/criarAlunos");
const { listarAluno } = require("./alunos/listarAlunos");
const { excluirAlunos } = require("./alunos/excluirAluno");
const { editarAluno } = require("./alunos/editarAlunos");

criarAluno("a92123","João","joao@email.com","8499999-9999");
criarAluno("a92124","Maria","maria@email.com","8499999-9998")
listarAluno();

// editarAluno("a92124","Maria João", "mariajoao@email.com", "83999999999");
// listarAluno();

excluirAlunos("a92124");
listarAluno();



