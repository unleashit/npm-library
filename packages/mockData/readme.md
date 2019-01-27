## Mock Data

Wrapper for [mocker-data-generator](https://github.com/danibram/mocker-data-generator) providing a set of templates with arguments. Can optionally write to a file (Node).

So far the templates currently available are `user`, `article`, `order` and `product`. More will be added over time.

### Install
```
npm install @unleashit/mock-data
```

### Single schema

For a single schema, call the library with a config object. Possible properties are `template`, `templates`, `total`, `args`, `name`, `hiddenFields` and `path`.

If `path` is provided and the envirnment is Node, a JSON file will be written.

```
import mockData from '@unleashit/mock-data';

// returns a promise

async function generateMockData() {
    return await mockData({
        template: "product",
        total: 20,
        args: {
            minPrice: 500;
            maxPrice 10000;
            maxDescription: 10;
        },
        hiddenFields: ['createdAt'];
    });
}

// { product: [ ... ] }
```

### With multiple schemas

For multiple schemas, add as an array on the `templates` property. Each template can have any of the same fields (except `path` and `templates`) as a single template.

```
const data = await mockData({
    templates: [
        {
            template: 'user',
            total: 10,
            name: 'authors'
        },
        {
            template: 'article',
            total: 20,
            name: 'blogs
        }
    ],
    name: 'mockData'
    path: '/home/myUser'
});

// data is returned and saved as /home/myUser/mockData.json
//
// {
//   authors: [...]
//   blogs: [...]
// }
```

### Custom template(s)

Templates are in the same format as mock-data-generator except must be supplied as a function. Supply any arguments to the args property as an object.

```
const args = {
  min: 18,
  max: 110,
  setProperty: 'anything'
};

const template = () => ({
  id: {
    chance: "guid"
  },
  age: {
    faker: `random.number({"min": ${args.min}, "max": ${args.max}})`
  },
  setProperty: {
    static: `${args.setProperty}`
  }
});

const data = await mockData({
    template: template,
    total: 20,
    args,
    name: 'myData'
});

// { myData: [...] }
```
