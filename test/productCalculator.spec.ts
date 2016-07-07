/// <reference path="../typings/index.d.ts" />
/// <reference path="../src/models/product.ts" />


import * as chai from 'chai';
import * as models from '../src/models/product';
import ProductCalculator from '../src/services/productCalculator';

describe('ProductCalculator', function() {    
  describe('#Calculate()', function() {
    var data: models.Product[];
    beforeEach(()=>{
        data = [
            { Id: 1, Cost: 1, Revenue: 11, SellPrice: 21 },
            { Id: 2, Cost: 2, Revenue: 12, SellPrice: 22 },
            { Id: 3, Cost: 3, Revenue: 13, SellPrice: 23 },
            { Id: 4, Cost: 4, Revenue: 14, SellPrice: 24 },
            { Id: 5, Cost: 5, Revenue: 15, SellPrice: 25 },
            { Id: 6, Cost: 6, Revenue: 16, SellPrice: 26 },
            { Id: 7, Cost: 7, Revenue: 17, SellPrice: 27 },
            { Id: 8, Cost: 8, Revenue: 18, SellPrice: 28 },
            { Id: 9, Cost: 9, Revenue: 19, SellPrice: 29 },
            { Id: 10, Cost: 10, Revenue: 20, SellPrice: 30 },
            { Id: 11, Cost: 11, Revenue: 21, SellPrice: 31 }
        ]
    })

    it('should return [6, 15, 24, 21] when the pageSize is 3 and the property is "Cost" ', ()=> {
      var expected = [6, 15, 24, 21];

      var calculator = new ProductCalculator();
      var actual = calculator.Calculate(data, 3, (p)=> p.Cost);

      chai.assert.sameMembers(expected, actual);
    });

    it('should return [50, 66, 60] when the pageSize is 4 and the property is "Revenue" ', ()=> {
      var expected = [50, 66, 60];

      var calculator = new ProductCalculator();
      var actual = calculator.Calculate(data, 4, (p)=> p.Revenue);

      chai.assert.sameMembers(expected, actual);
    });
  });
});