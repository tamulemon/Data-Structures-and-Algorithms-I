var imp = require('../array_functions'),
		Array = require('../array_functions').Array,
		expect = require('chai').expect,
		testObj = {a:1, b:2, c:2, d:0.5},
		testObj2 = ['abc','ACD','meng', 'd1d', 'eee']

describe('alltesting', function() {
	describe('duplicate', function(){
		it('will return true if the array contains duplicates', function() {
			expect(imp.duplicate([1,2,2,3])).equal(true);
		})
		it('will return false if the array doesn\'t contain duplicates', function() {
			expect(imp.duplicate(['apple','orange','Orange'])).equal(false);
		})
	});
	
	describe('uique', function(){
		it('will return a copy of an array with duplicates removed', function() {
			expect(imp.unique([1,2,2,4,4,6,7])).deep.equal([1,2,4,6,7]);
		})
	});

	describe('frequency', function() {
		it('will return the most frequent first letter from an array of strings', function() {
			expect(imp.frequency(testObj2)).deep.equal([2, ['A']]); 
		});
	});
	
	describe('frequency2', function() {
		it('will return the most frequent letter from an array of strings', function() {
			expect(imp.frequency2(testObj2)).deep.equal([4, ['E']]);
		});
	});
	
	describe('new array method', function() {
		var arr = [1, 2, 3, 4, 5];
		describe('shift1', function() {
			it('should remove and return the 1st item', function() {
				expect(arr.shift1()).equal(1);
			});	
		});
		describe('pop1', function() {
			it('should remove and return the last item', function() {
				expect(arr.pop1()).equal(5);
			})
		});
		describe('push1', function() {
			it('should add the item to the end of the array', function() {
				arr.push1('apple');
				expect(arr).deep.equal([2,3,4,'apple']);
			})
		});
		describe('unshift1', function() {
			it('should add the item to the front of the array', function() {
				arr.unshift1('orange');
				expect(arr).deep.equal(['orange',2,3,4,'apple']);
			})
		});
	});
});
	
	


