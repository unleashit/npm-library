/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { removeHidden, template } from './templateHelper';

interface ProductArgs {
  minPrice?: number;
  maxPrice?: number;
  maxDescription?: number;
  hiddenFields?: string[];
}

export const product: template = ({
  minPrice = 1,
  maxPrice = 1000,
  maxDescription = 2,
  hiddenFields = [],
}: ProductArgs = {}): any =>
  removeHidden(hiddenFields, {
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
    createdAt: {
      faker: 'date.past',
    },
  });
