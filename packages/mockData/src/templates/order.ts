/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { removeHidden, template } from './templateHelper';

// TODO: currently the "items" property is repeat data
//  since mocker-data-generator can't handle arrays of objects

interface ProductArgs {
  minItems?: number;
  maxItems?: number;
  minPrice?: number;
  maxPrice?: number;
  maxDescription?: number;
  hiddenFields?: string[];
}

export const order: template = ({
  minItems = 1,
  maxItems = 3,
  maxDescription = 3,
  minPrice = 1,
  maxPrice = 1000,
  hiddenFields = [],
}: ProductArgs = {}): any =>
  removeHidden(hiddenFields, {
    id: { chance: 'guid' },
    userId: {
      chance: 'guid',
    },
    _item: {
      id: { chance: 'guid' },
      name: { faker: 'commerce.productName' },
      description: {
        function() {
          return this.faker.lorem.paragraphs(
            Math.floor(Math.random() * maxDescription + 1),
          );
        },
      } as any,
      price: {
        chance: `floating({"fixed": 2, "min": ${minPrice}, "max": ${maxPrice}})`,
      },
      qty: {
        function() {
          return Math.floor(Math.random() * minItems + maxItems);
        },
      },
      createdAt: {
        faker: 'date.past',
      },
    },
    items: [
      {
        function() {
          return this.object._item;
        },
        length: 3,
      } as any,
    ],
    total: {
      function() {
        return this.object.items
          .reduce((a: number, b: any) => b.price * b.qty + a, 0)
          .toFixed(2);
      },
    } as any,
    createdAt: {
      faker: 'date.past',
    },
  });
