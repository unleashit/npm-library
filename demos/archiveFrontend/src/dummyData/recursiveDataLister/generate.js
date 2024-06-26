#!/usr/bin/env node

const { faker } = require('@faker-js/faker');
const { writeFileSync } = require('node:fs');

function generateBook() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(),
    author: `${faker.person.firstName()} ${faker.person.lastName()}`,
    revisions: Array(faker.helpers.rangeToNumber({ min: 1, max: 3 }))
      .fill(undefined)
      .map(() => ({
        id: faker.string.uuid(),
        date: faker.date.between({ from: 1940, to: new Date() }),
        description: faker.lorem.sentence(),
      })),
  };
}

function randomBookReader() {
  return {
    id: faker.string.uuid(),
    profile: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({ min: 12, max: 100 }),
      avatar: faker.image.avatar(),
    },
    booksRead: Array(faker.helpers.rangeToNumber({ min: 1, max: 5 }))
      .fill(undefined)
      .map(generateBook),
    memberSince: faker.date.past({ years: 10 }),
  };
}

function main() {
  const data = [randomBookReader(), randomBookReader(), randomBookReader()];
  writeFileSync(`${__dirname}/dummyData.json`, JSON.stringify(data, null, 2));
}

main();
