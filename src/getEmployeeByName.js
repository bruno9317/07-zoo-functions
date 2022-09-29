const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const empregados = data.employees;
  const empregado = empregados.find((p) => p.firstName === employeeName);
  const empregado2 = empregados.find((p) => p.lastName === employeeName);
  if (typeof empregado !== 'undefined') {
    return empregado;
  }
  if (typeof empregado2 !== 'undefined') {
    return empregado2;
  }
  const objetoVazio = {};
  return objetoVazio;
}

module.exports = getEmployeeByName;
