const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('retorna a média de idade dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toEqual(expected);
  });
  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });
  it('retorna a popularidade dos elefantes', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toEqual(expected);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });
  it('retorna null para uma string com parametro inexistente', () => {
    const actual = handlerElephants('');
    const expected = null;
    expect(actual).toEqual(expected);
  });
  it('retorna undefined se passar um parametro vazio', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
  it('retorna "Parâmetro inválido, é necessário uma string" se passar um parametro diferente de string', () => {
    const actual = handlerElephants(['count']);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toEqual(expected);
  });
});
