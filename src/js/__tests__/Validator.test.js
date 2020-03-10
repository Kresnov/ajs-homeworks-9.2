import Validator from '../Validator.js';

test('Успех', () => {
  const validator = new Validator();
  const received = validator.validateUsername('AleX_123-HEllo');
  expect(received).toBe(true);
});

test('Ошибка (латиница)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Алекс_12345-HEllo');
  expect(received).toBe(false);
});

test('Ошибка (более 3-х цифр)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('AleX_12345-HEllo');
  expect(received).toBe(false);
});

test('Ошибка (начинается с числа)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('7AleX_123-HEllo');
  expect(received).toBe(false);
});

test('Ошибка (заканчивается числом)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('AleX_123-HEllo7');
  expect(received).toBe(false);
});

test('Ошибка (начинается с подчеркивания)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('_AleX_12345-HEllo');
  expect(received).toBe(false);
});

test('Ошибка (заканчивается подчеркиванием)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('AleX_12345-HEllo_');
  expect(received).toBe(false);
});

test('Ошибка (начинается с тире)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('-AleX_12345-HEllo');
  expect(received).toBe(false);
});

test('Ошибка (заканчивается тире)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('AleX_12345-HEllo-');
  expect(received).toBe(false);
});
