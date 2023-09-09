const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const colaboradores = [];

function cadastrarColaborador() {
  rl.question('Nome do Colaborador: ', (nome) => {
    rl.question('Chefe: ', (chefe) => {
      colaboradores.push({ nome, chefe });
      console.log('Colaborador cadastrado com sucesso!');
      menu();
    });
  });
}

function listarColaboradores() {
  if (colaboradores.length === 0) {
    console.log('Nenhum colaborador cadastrado.');
  } else {
    console.log('Lista de Colaboradores:');
    colaboradores.forEach((colaborador, index) => {
      console.log(`[${index + 1}] Nome: ${colaborador.nome}, Chefe: ${colaborador.chefe}`);
    });
  }
  menu();
}

function menu() {
  console.log('\nOpções:');
  console.log('1. Cadastrar Colaborador');
  console.log('2. Listar Colaboradores');
  console.log('3. Sair');

  rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
      case '1':
        cadastrarColaborador();
        break;
      case '2':
        listarColaboradores();
        break;
      case '3':
        console.log('Saindo do programa.');
        rl.close();
        break;
      default:
        console.log('Opção inválida. Tente novamente.');
        menu();
        break;
    }
  });
}

console.log('Sistema de Cadastro de Colaboradores e Chefes\n');
menu();
