const calculateBonus = require('./script');

describe('calculateBonus', () => {
    test('should return 50 if sum is greater than 50', () => {
        expect(calculateBonus(45, 25)).toBe(50); 
    });

    test('should return sum if sum is less than 50', () => {
        expect(calculateBonus(20, 25)).toBe(45); 
    });

    test('should return sum if sum is exactly 50', () => {
        expect(calculateBonus(30, 20)).toBe(50); 
    });

    test('should handle negative numbers', () => {
        expect(calculateBonus(-10, 20)).toBe(10); 
    });

    test('should handle zero values', () => {
        expect(calculateBonus(0, 0)).toBe(0); 
    });
});
