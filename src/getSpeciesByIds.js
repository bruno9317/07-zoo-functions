const data = require('../data/zoo_data');

function getSpeciesByIds(ids, ids2) {
  const animais = data.species;
  const bicho = animais.find((animal) => animal.id === ids);
  const objetoDeAnimais = bicho;
  if (typeof bicho === 'undefined') {
    return [];
  }
  if (typeof ids2 !== 'undefined') {
    const bicho2 = animais.find((animal) => animal.id === ids2);
    const objetoDeAnimais2 = bicho2;
    return [objetoDeAnimais, objetoDeAnimais2];
  }
  return [objetoDeAnimais];
}

module.exports = getSpeciesByIds;
