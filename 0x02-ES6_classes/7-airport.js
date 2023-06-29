class Airport {
  constructor(name, code) {
    this._name = '';
    this._code = '';

    if (typeof name === 'string' && typeof code === 'string') {
      this._name = name;
      this._code = code;
    }
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}

export default Airport;
