import { faker } from '@faker-js/faker';

function generateBook() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(),
    author: `${faker.person.firstName()} ${faker.person.lastName()}`,
    revisions: Array(faker.helpers.rangeToNumber({ min: 1, max: 3 }))
      .fill(undefined)
      .map(() => ({
        id: faker.string.uuid(),
        date: faker.date.between({ from: 1940, to: new Date().getFullYear() }),
        description: faker.lorem.sentence(),
      })),
  };
}

export function randomBookReader(): Record<string, any> {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    avatar: faker.image.avatar(),
    booksRead: Array(faker.helpers.rangeToNumber({ min: 1, max: 5 }))
      .fill(undefined)
      .map(generateBook),
    registeredAt: faker.date.past({ years: 10 }),
  };
}

export function generateComplexJson(): Record<string, any> {
  return [randomBookReader(), randomBookReader(), randomBookReader()];
}
