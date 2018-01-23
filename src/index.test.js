import { expect } from 'chai';

import SortbaleList from './index.js';

describe('SortbaleList Component', function() {
  describe('component', function() {
    it('It should return a function', function() {
      expect(SortbaleList).to.satisfy(isFunction);

      function isFunction(args) {
        console.log(typeof args);
        return typeof args === 'function';
      }
    });
  });
});
