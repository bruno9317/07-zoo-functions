const data = require('../data/zoo_data');

function isManager(id) {
  const empregados = data.employees;
  const gerentes = empregados.map((e) => e.managers);
  const ListaDeGerentes = [];
  const [primeirosGerente, segundosGerente] = gerentes;
  const [primeiroGerente, segundoGerente] = primeirosGerente;
  const [terceiroGerente] = segundosGerente;
  ListaDeGerentes[0] = primeiroGerente;
  ListaDeGerentes[1] = segundoGerente;
  ListaDeGerentes[2] = terceiroGerente;
  const confere = ListaDeGerentes.some((codigo) => codigo === id);
  return confere;
}

function getRelatedEmployees(managerId) {
  const empregados = data.employees;
  const nomes = [];
  if (isManager(managerId) === true) {
    empregados.forEach((e) => {
      if (e.managers.includes(managerId)) {
        nomes.push(`${e.firstName} ${e.lastName}`);
      }
    });
    return nomes;
  }
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
