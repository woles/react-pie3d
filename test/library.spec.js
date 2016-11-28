import chai from 'chai';
import Library from '../lib/animated-3d-pie.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my library', function () {
  before(function () {
    lib = Library;
    consolelog(lib.drow())
  });
  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Library');
    });
  });
});
