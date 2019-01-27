import { template, removeHidden } from "./templateHelper";

interface articleArgs {
  maxContent?: number;
  hiddenFields?: string[];
}

export const article: template = ({
  maxContent = 5,
  hiddenFields = []
}: articleArgs = {}) => removeHidden(hiddenFields, {
  id: {
    chance: "guid"
  },
  title: {
    function: function() {
      return this.faker.lorem.words(Math.floor(Math.random() * 4 + 3));
    }
  } as any,
  createdAt: {
    faker: "date.past"
  },
  content: {
    function: function() {
      return this.faker.lorem.paragraphs(
        Math.floor(Math.random() * maxContent + 1)
      );
    }
  } as any,
  author: {
    name: {
      function: function() {
        return `${this.faker.name.firstName()} ${this.faker.name.lastName()}`;
      }
    } as any,
    email: {
      faker: "internet.email"
    },
    dob: {
      faker: "date.between(1920, 2015)"
    },
    avatar: {
      faker: "image.avatar"
    }
  }
});
