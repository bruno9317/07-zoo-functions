const data = require('../data/zoo_data');

const especies = data.species;
// const horarios = data.hours;
// const diasDaSemana = Object.keys(horarios);

function getSchedule(scheduleTarget) {
  // const especies = data.species;
  const especie = especies.find((p) => p.name === scheduleTarget);
  console.log(typeof especie);
  if (typeof especie === 'object') {
    const diasDisp = especie.availability;
    return diasDisp;
  }
}

// console.log(getSchedule('tiger'));

// const especies = data.species;
// const especie = especies.find((p) => p.name === 'tigers');
// const diasDisp = especie.availability;

// console.log(horarios);
// console.log(horarios.Tuesday.open);
// console.log();
// console.log(diasDaSemana.forEach((p) => console.log(`{ ${p}: }`)));
// console.log(diasDaSemana.forEach((p) => console.log(`{ ${p}: ${horarios.p.open} }`)));
// console.log(especies);
// console.log(especie);
// console.log(diasDisp);

module.exports = getSchedule;
