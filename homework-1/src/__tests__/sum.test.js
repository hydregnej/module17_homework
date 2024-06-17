import { sum } from "../sum";

describe('Сумма чисел', () => {
  it('1 + 2 = 3', () => {
    expect(sum(1,2)).toBe(3)
  });
  it('1 + 2 = 3', () => {
    expect(sum(1,4)).toBe(5)
  });
  it('1 + 2 = 3', () => {
    expect(sum(1,2)).toBe(32)
  });
  
});
