const rRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const complexJsonTemplate = () => ({
  id: {
    chance: 'guid',
  },
  firstName: {
    faker: 'name.firstName',
  },
  lastName: {
    faker: 'name.lastName',
  },
  avatar: {
    faker: 'image.avatar',
  },
  booksRead: [
    {
      function: function() {
        return {
          id: this.chance.guid(),
          title: this.faker.lorem.words(),
          author: `${this.faker.name.firstName()} ${this.faker.name.lastName()}`,
          revisions: Array(rRange(1, 3)).fill(undefined).map(() => ({
            id: this.chance.guid(),
            date: this.chance.date({year: rRange(1940, 2018), string: true}),
            description: this.faker.lorem.sentence()
          })),
        };
      },
      length: rRange(1, 5),
    },
  ],
  createdAt: {
    function() {
      return this.faker.date.past().getTime()
    }
  },
});
