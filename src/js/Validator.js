export default class Validator {
  validateUsername(name) {
    this.name = name;

    return /^[(a-z)(0-9)_-]+[^(0-9)_-]$/i.test(name) && !/\d{4,}/.test(name) && /^[^(0-9)(а-яё)_-]/.test(name);
  }
}
