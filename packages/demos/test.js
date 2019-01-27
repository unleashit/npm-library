var mocker = require('mocker-data-generator').default;

var user = {
  firstName: {
    faker: 'name.firstName'
  },
  lastName: {
    faker: 'name.lastName'
  },
  country: {
    faker: 'address.country'
  },
  createdAt: {
    faker: 'date.past'
  },
  username: {
    function: function() {
      return (
        this.object.lastName.substring(0, 5) +
        this.object.firstName.substring(0, 3) +
        Math.floor(Math.random() * 10)
      )
    }
  }
}
var group = {
  description: {
    faker: 'lorem.paragraph'
  },
  users: [
    {
      function: function() {
        return this.faker.random.arrayElement(this.db.user).username
      },
      length: 10,
      fixedLength: false
    }
  ]
}
var conditionalField = {
  type: {
    values: ['HOUSE', 'CAR', 'MOTORBIKE']
  },
  'object.type=="HOUSE",location': {
    faker: 'address.city'
  },
  'object.type=="CAR"||object.type=="MOTORBIKE",speed': {
    faker: 'random.number'
  }
}

mocker()
  .schema('user', user, 2)
  .schema('group', group, 2)
  .schema('conditionalField', conditionalField, 2)
  .build()
  .then(
    data => {
      console.log(JSON.stringify(data));
      // This returns an object
      // {
      //      user:[array of users],
      //      group: [array of groups],
      //      conditionalField: [array of conditionalFields]
      // }
    },
    err => console.error(err)
  )