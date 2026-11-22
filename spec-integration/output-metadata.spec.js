const assert = require('assert');
const create = require('../lib/schemas/createPet.out.json').properties;
const poll = require('../lib/schemas/getPetsByStatus.out.json').properties.pets.properties;

describe('Petstore response metadata', () => {
  for (const [name, fields] of [['create', create], ['poll', poll]]) {
    it(`accepts a ${name} record with just the name and status`, () => {
      assert.deepStrictEqual(Object.keys(fields).filter(key => fields[key].required).sort(), ['name', 'status']);
      assert.strictEqual(fields.id.required, false);
      assert.strictEqual(fields.category.required, false);
      assert.ok(Object.values(fields.category.properties).every(value => !value.required));
    });
  }
});
