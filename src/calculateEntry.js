const data = require('../data/zoo_data');

const preços = data.prices;

function countEntrants(entrants) {
  if (entrants.length < 1) {
    return null;
  }
  if (typeof entrants === 'object' && entrants.length > 0) {
    const childs = entrants.filter((p) => p.age < 18);
    const seniors = entrants.filter((p) => p.age >= 50);
    const adults = entrants.length - childs.length - seniors.length;
    return { child: childs.length, adult: adults, senior: seniors.length };
  }
}

function calculateEntry(entrants) {
  if (typeof entrants !== 'object') {
    return 0;
  }
  if (typeof entrants === 'object' && entrants.length > 0) {
    const objeto1 = countEntrants(entrants);
    const arrayDeQuant = Object.values(objeto1);
    const arrayDePreços = Object.values(preços);
    const valorDasCrianças = arrayDeQuant[0] * arrayDePreços[2];
    const valorDosAdultos = arrayDeQuant[1] * arrayDePreços[0];
    const valorDosIdosos = arrayDeQuant[2] * arrayDePreços[1];
    return valorDasCrianças + valorDosAdultos + valorDosIdosos;
  }
  return 0;
}

module.exports = { calculateEntry, countEntrants };
