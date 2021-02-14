const { expect } = require('chai');

const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('App', () => {
  describe('sayHello', () => {
    it('should return hello', () => {
      const result = sayHello();
      expect(result).to.equal('hello');
    });
    it('should return type string', () => {
      const result = sayHello();
      expect(result).to.be.a('string');
    })
    it('should return firt arg plus second arg', () => {
      const result = addNumbers(2, 3);
      expect(result).to.equal(5);
    })
  })
});
