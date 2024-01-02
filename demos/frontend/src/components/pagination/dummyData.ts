import { faker } from '@faker-js/faker';

function randomBlogPost() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(Math.floor(Math.random() * 4 + 3)),
    content: faker.lorem.paragraphs(
      {
        min: 1,
        max: 4,
      },
      '<br/ ><br/>',
    ),
    author: faker.person.fullName(),
  };
}
// generate between 3 and 5 blog posts
export default function generateFakeBlog(items = 10) {
  return Array.from({ length: items }, () => randomBlogPost());
}
