const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age1) {
  const animais = data.species;
  const bicho = animais.find((bichinho) => bichinho.name === animal);
  const idades = bicho.residents.every((residentes) => residentes.age >= age1);
  return idades;
}

module.exports = getAnimalsOlderThan;
