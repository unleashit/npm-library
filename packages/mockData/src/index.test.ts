/* eslint-disable @typescript-eslint/explicit-function-return-type */
import mockData from '.';

const fs = require('fs');

const template = (): {} => ({
  id: {
    chance: 'guid',
  },
  age: {
    faker: 'random.number({"min": 1, "max": 17})',
  },
  country: {
    casual: 'country',
  },
  favoriteGreeting: {
    randexp: /feed (me|you and me|he and me|she and me)/,
  },
  name: {
    values: ['txuri', 'pitxi', 'kitty', 'obi'],
  },
});

describe('mockData', () => {
  it('produces the right object', async () => {
    const data: any = await mockData({ template: 'user' });
    expect('user' in data).toBe(true);

    const data2: any = await mockData({ template: 'article' });
    expect('article' in data2).toBe(true);
  });

  it('produces the right number of items', async () => {
    // default total
    const data: any = await mockData({ template: 'user' });
    expect(data.user).toHaveLength(10);

    // custom total
    const data2: any = await mockData({ template: 'article', total: 17 });
    expect(data2.article).toHaveLength(17);
  });

  it('uses the provided name as the key', async () => {
    const data: any = await mockData({
      template: 'user',
      total: 3,
      name: 'feefifofum',
    });
    expect('feefifofum' in data).toBe(true);
  });

  it('hides the right number of fields', async () => {
    const data: any = await mockData({
      template: 'user',
      total: 1,
      hiddenFields: ['firstName', 'avatar', 'dob'],
    });
    expect(Object.keys(data.user[0])).toHaveLength(6);
  });

  it('returns multiple schemas (all possible) plus custom', async () => {
    const data: any = await mockData({
      templates: [
        {
          template: 'article',
          total: 2,
        },
        {
          template: 'user',
          total: 2,
        },
        {
          template: 'product',
          total: 2,
        },
        {
          template: 'order',
          total: 2,
        },
        {
          template,
          total: 2,
          // name: "custom"
        },
      ],
    });

    expect('article' in data).toBe(true);
    expect(data.article).toHaveLength(2);
    expect('user' in data).toBe(true);
    expect(data.user).toHaveLength(2);
    expect('product' in data).toBe(true);
    expect(data.product).toHaveLength(2);
    expect('order' in data).toBe(true);
    expect(data.order).toHaveLength(2);
    // if no name is supplied to a custom template, the given name should
    // be the its mockData in the templates array as a string
    expect('4' in data).toBe(true);
    // expect(data.custom).toHaveLength(2);
  });

  it('throws the right errors', async () => {
    console.error = jest.fn();
    try {
      await mockData({});
    } catch (err) {
      expect(err.message).toEqual(
        'You must provide either a template or templates argument',
      );
    }
  });

  describe('custom templates', () => {
    it('takes a custom template', async () => {
      const data = await mockData({
        template,
        total: 1,
        name: 'cats',
      });

      expect(Object.keys(data.cats[0])).toEqual([
        'id',
        'age',
        'country',
        'favoriteGreeting',
        'name',
      ]);
    });

    it('takes a custom template with args', async () => {
      const template2Args = {
        min: 100,
        max: 102,
        setProperty: 'blarg',
      };

      const template2 = (args: any): {} => ({
        id: {
          chance: 'guid',
        },
        age: {
          faker: `random.number({"min": ${args.min}, "max": ${args.max}})`,
        },
        setProperty: {
          static: `${args.setProperty}`,
        },
      });

      const data = await mockData({
        template: template2,
        total: 1,
        args: template2Args,
        name: 'withArgs',
      });

      const result = data.withArgs[0];
      expect(result.setProperty).toEqual('blarg');
      expect([100, 101, 102].includes(result.age)).toBe(true);
    });
  });

  describe('relations', () => {
    it('custom templates work with relations', async () => {
      const user = (): {} => ({
        id: {
          chance: 'guid',
        },
        name: {
          faker: 'name.findName()',
        },
        email: {
          faker: 'internet.email()',
        },
      });

      const productArgs: any = {
        minPrice: 1,
        maxPrice: 100,
      };

      const product = (args: any): {} => ({
        id: { chance: 'guid' },
        name: { faker: 'commerce.productName' },
        price: {
          chance: `floating({"fixed": 2, "min": ${args.minPrice}, "max": ${
            args.maxPrice
          }})`,
        },
      });

      const order: any = (): {} => ({
        id: {
          chance: 'guid',
        },
        userId: {
          hasOne: 'user',
          get: 'id',
        },
        _items: {
          hasMany: 'product',
          max: 3,
          unique: true,
          virtual: true,
        },
        items: {
          function() {
            return this.object._items.map((item: any) => ({
              ...item,
              qty: Math.floor(Math.random() * 3 + 1),
            }));
          },
        } as any,
        total: {
          function() {
            return this.object.items
              .reduce((a: number, b: any) => b.price * b.qty + a, 0)
              .toFixed(2);
          },
        } as any,
      });

      const data: any = await mockData({
        templates: [
          {
            template: user,
            total: 5,
            name: 'user',
          },
          {
            template: product,
            total: 5,
            name: 'product',
            args: productArgs,
          },
          {
            template: order,
            total: 5,
            name: 'order',
          },
        ],
        name: 'testData',
        path: __dirname,
      });

      expect('user' in data && 'product' in data && 'order' in data).toBe(true);
      expect(data.user).toHaveLength(5);
    });
  });

  describe('file writing', () => {
    const testPath = __dirname;

    afterEach(() => {
      fs.unlinkSync(`${testPath}/testData.json`);
    });

    it('writes to a file', async () => {
      await mockData({
        template: 'article',
        total: 7,
        name: 'testData',
        path: testPath,
      });

      const data = JSON.parse(fs.readFileSync(`${testPath}/testData.json`));
      expect('testData' in data).toBe(true);
      expect(data.testData).toHaveLength(7);
    });

    it('writes to a file with multiple schemas', async () => {
      await mockData({
        templates: [
          {
            template: 'article',
            total: 2,
          },
          {
            template: 'user',
            total: 2,
          },
        ],
        name: 'testData',
        path: testPath,
      });

      const data = JSON.parse(fs.readFileSync(`${testPath}/testData.json`));
      expect('article' in data).toBe(true);
      expect(data.article).toHaveLength(2);
      expect('user' in data).toBe(true);
      expect(data.user).toHaveLength(2);
    });
  });
});
