import { template, removeHidden } from "./templateHelper";

interface userArgs {
  dobMin?: number;
  dobMax?: number;
  hiddenFields?: string[];
}

export const user: template = ({
  dobMin = 1920,
  dobMax = 2000,
  hiddenFields = []
}: userArgs = {}) => removeHidden(hiddenFields, {
  id: {
    chance: "guid"
  },
  firstName: {
    faker: "name.firstName"
  },
  lastName: {
    faker: "name.lastName"
  },
  fullName: {
    function: function() {
      return `${this.object.firstName} ${this.object.lastName}`;
    }
  } as any,
  userName: {
    faker: "internet.userName"
  },
  email: {
    faker: "internet.email"
  },
  dob: {
    faker: `date.between(${dobMin}, ${dobMax})`
  },
  avatar: {
    faker: "image.avatar"
  },
  createdAt: {
    faker: "date.past"
  }
});
