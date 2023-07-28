/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { removeHidden } from './templateHelper';

describe('template helper', () => {
  it('removeHidden() removes selected fields from object', () => {
    const obj = {
      firstName: 'blabala',
      lastName: 'blabala',
      age: 30,
      validUser: true,
      lastActive: new Date(),
      regDate: new Date(),
    };
    let fieldsToRemove: string[] = [];
    let newObj;

    newObj = removeHidden(fieldsToRemove, obj);
    expect(Object.keys(newObj)).toEqual([
      'firstName',
      'lastName',
      'age',
      'validUser',
      'lastActive',
      'regDate',
    ]);

    fieldsToRemove = ['lastName', 'regDate'];
    newObj = removeHidden(fieldsToRemove, obj);
    expect(Object.keys(newObj)).toEqual([
      'firstName',
      'age',
      'validUser',
      'lastActive',
    ]);

    fieldsToRemove = ['firstName', 'lastName', 'age', 'validUser', 'regDate'];
    newObj = removeHidden(fieldsToRemove, obj);
    expect(Object.keys(newObj)).toEqual(['lastActive']);
  });
});
