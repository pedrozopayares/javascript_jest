const count = require("./module");

describe('module', () => {
    test('should return imported count value', () => { 
        expect(count()).toBe(5);
    });
})