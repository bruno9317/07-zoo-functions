const data = require('../data/zoo_data');

function ordenaDecrescente(a, b) {
  return (b - a);
}

function getOldestFromFirstSpecies(id) {
  const funcionario = data.employees.find((p) => p.id === id);
  const idDaEspecie = funcionario.responsibleFor[0];
  const dadosDaEspecie = data.species.find((p) => p.id === idDaEspecie);
  const residentes = dadosDaEspecie.residents;
  const idades = residentes.map((p) => p.age);
  idades.sort(ordenaDecrescente);
  const maiorIdade = idades[0];
  const residenteMaisVelho = residentes.find((p) => p.age === maiorIdade);
  return Object.values(residenteMaisVelho);
}

module.exports = getOldestFromFirstSpecies;
