const data = require('../data/zoo_data');

function semParametro() {
  const meuObj = {};
  data.species.forEach((p) => { meuObj[p.name] = p.residents.length; });
  return meuObj;
}

function countAnimals(animal) {
  let nomeDaSpecie;
  let qualSexo;
  if (typeof animal !== 'undefined') {
    const array = Object.values(animal);
    [nomeDaSpecie, qualSexo] = array;
  }
  if (typeof nomeDaSpecie === 'undefined') { return semParametro(); }
  if (typeof qualSexo === 'undefined') {
    const dadosDaSpecie = data.species.find((p) => p.name === nomeDaSpecie);
    const animaisDaSpecie = dadosDaSpecie.residents;
    return animaisDaSpecie.length;
  }
  if (typeof qualSexo !== 'undefined') {
    const animaisDaSpecie2 = data.species.find((p) => p.name === nomeDaSpecie).residents;
    const animaisDoSexo2 = animaisDaSpecie2.filter((p) => p.sex === qualSexo);
    return animaisDoSexo2.length;
  }
}

module.exports = countAnimals;
