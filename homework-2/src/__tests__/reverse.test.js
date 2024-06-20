import { reverseStroke } from "../reverse";

describe('Тестирование строк - реверсированием', () => {
  it('строка - акортс', () => {
    expect(reverseStroke("строка")).toBe("акортс")
  });
  
});
