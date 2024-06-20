import { getPercents } from "../getPercents.js";

describe('Процент от числа', () => {
  it('30% от 200 = 60', () => {
    expect(getPercents(30, 200)).toBe(60)
  });

  it('10% от 200 = 20', () => {
    expect(getPercents(10, 200)).toBe(20)
  });

  it('50% от 200 = 100', () => {
    expect(getPercents(50, 200)).toBe(100)
  });

  it('Одно из чисел - строка, но является числом 50% от 200 = 100', () => {
    expect(getPercents("50", 200)).toBe(100)
  });

  it('Одно из чисел прописано буквами "Пятьдесят" от 200 = NaN', () => {
    expect(getPercents("Пятьдесят", 200)).toBeNaN()
  });

  it('-50% от 200 = -100', () => {
    expect(getPercents(-50, 200)).toBe(-100)
  });
  
  it('0% от 200 = 0', () => {
    expect(getPercents(0, 200)).toBe(0)
  });

  it('Передаётся один аргумент 0 = NaN', () => {
    expect(getPercents(0)).toBe(NaN)
  });

});
