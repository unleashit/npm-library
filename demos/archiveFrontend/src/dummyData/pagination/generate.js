#!/usr/bin/env node

const { faker } = require('@faker-js/faker');
const { writeFileSync } = require('node:fs');

function randomBlogPost() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem
      .words(Math.floor(Math.random() * 4 + 3))
      .replace(/^./, (char) => char.toUpperCase()),
    content: faker.lorem.paragraphs(
      {
        min: 1,
        max: 3,
      },
      '<br/ ><br />',
    ),
    author: faker.person.fullName(),
  };
}

const data = Array.from({ length: 500 }, () => randomBlogPost());
writeFileSync(`${__dirname}/dummyData.json`, JSON.stringify(data, null, 2));
