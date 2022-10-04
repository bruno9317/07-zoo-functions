const data = require('../data/zoo_data');

function achaEspecie(id) {
  const teste32 = data.species.find((p) => p.id === id);
  return teste32;
}

function seForObjeto(param) {
  let funcionario = data.employees.find((p) => p.firstName === Object.values(param)[0]);
  if (typeof funcionario === 'undefined') {
    funcionario = data.employees.find((p) => p.lastName === Object.values(param)[0]);
  }
  if (typeof funcionario === 'undefined') {
    funcionario = data.employees.find((p) => p.id === Object.values(param)[0]);
  }
  if (typeof funcionario === 'undefined') { throw new Error('Informações inválidas'); }
  const dadosDasEspecies = funcionario.responsibleFor.map((p) => achaEspecie(p));
  const nomeDasEspecies = dadosDasEspecies.map((p) => p.name);
  const localDasEspecies = dadosDasEspecies.map((p) => p.location);
  return {
    id: funcionario.id,
    fullName: `${funcionario.firstName} ${funcionario.lastName}`,
    species: nomeDasEspecies,
    locations: localDasEspecies,
  };
}

function seNaoForObjeto(param) {
  const retorno = data.employees.map((p) => ({ id: p.id,
    fullName: `${p.firstName} ${p.lastName}`,
    species: p.responsibleFor.map((s) => achaEspecie(s)).map((b) => b.name),
    locations: p.responsibleFor.map((s) => achaEspecie(s)).map((b) => b.location),
  }));
  console.log(typeof retorno[0]);
  return retorno;
}

function getEmployeesCoverage(param) {
  if (typeof param === 'object') {
    return seForObjeto(param);
  }
  if (typeof param !== 'object') {
    return seNaoForObjeto();
  }
}

module.exports = getEmployeesCoverage;
