/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import { mount, shallow, ShallowWrapper } from "enzyme";
import AsyncHandler, { withAsyncHandler } from '..';

// const nextTick = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, 0);
//   });
// };
//
// const changeVal = (name, value) => {
//   return {
//     persist: () => {}, // Formik calls e.persist() internally
//     target: {
//       name,
//       value,
//     },
//   };
//
describe('<AsyncHandler />', () => {
  let wrapper: ShallowWrapper;

  describe('Render Prop', () => {
    beforeEach(async () => {
      const props = {
        request: () =>
          new Promise(res => {
            res(['red', 'green', 'blue', 'yellow', 'orange', 'black', 'white']);
          }),
      };
      wrapper = await shallow(
        <AsyncHandler {...props}>
          {data => <div className="test-class">{data.join(', ')}</div>}
        </AsyncHandler>,
      );
    });

    it('renders without crashing', () => {
      // expect(wrapper.find('.test-class')).toHaveLength(1);
      expect(wrapper).toMatchSnapshot();
    });

    // it('renders without crashing', () => {
    //   expect(wrapper.find('.test-class')).toHaveLength(1);
    //   expect(wrapper).toMatchSnapshot();
    // });
  });

  describe.only('HOC', () => {
    beforeEach(async () => {
      // wrapper = await shallow(
      //   <AsyncHandler {...props}>
      //     {data => <div className="test-class">{data.join(', ')}</div>}
      //   </AsyncHandler>,
      // );
      //

      interface User {
        id: number;
        name: string;
        age: number;
      }

      const users: User[] = [
        {
          id: 1,
          name: 'joe',
          age: 30,
        },
        {
          id: 2,
          name: 'judy',
          age: 27,
        },
      ];

      // let userCache = null;

      const UserList = ({ data }: { data: User[] }) => {
        return (
          <ul className="user-list">
            {data.map(item => (
              <li key={item.id}>
                {item.name} is {item.age} years old.
              </li>
            ))}
          </ul>
        );
      };

      const WrappedHandler = await withAsyncHandler({
        request: () => {
          return new Promise(resolve => {
            setTimeout(() => {
              // userCache = { users, cacheDate: new Date() };
              resolve(users);
            }, 200);
          });
        },
        // cache: () => {
        //   return userCache && new Date() - userCache.cacheDate <= 5 * 1000
        //     ? userCache.users
        //     : null;
        // },
        loaderComponent: () => <div>Stay tuned!</div>,
        noResultsComponent: () => <div>No user{"'"}s found.</div>,
        errorComponent: ({ error }) => (
          <div>Oops, there was a problem: {JSON.stringify(error)}</div>
        ),
      })(UserList);
      (wrapper as any) = await mount(<WrappedHandler />);
    });

    it.skip('renders without crashing', () => {
      console.log(wrapper.debug());
      expect(wrapper.find('.user-list')).toHaveLength(1);
      // expect(wrapper).toMatchSnapshot();
    });
  });
});
//
//   describe('validation', () => {
//     it('fields can be updated and validated', () => {
//       wrapper
//         .find('input[name="email"]')
//         .simulate('change', changeVal('email', 'test@test.com'));
//       wrapper
//         .find('input[name="password"]')
//         .simulate('change', changeVal('password', '12345678'));
//
//       expect(wrapper.find('input[name="email"]').props().value).toEqual('test@test.com');
//       const errors = wrapper.find('.errorMessage');
//       expect(errors).toHaveLength(0);
//     });
//
//     it('displays correct email validation errors', async () => {
//       const emailInput = wrapper.find('input[name="email"]');
//       const passwordInput = wrapper.find('input[name="password"]');
//       const form = wrapper.find('form');
//
//       // email can't be empty
//       passwordInput.simulate('change', changeVal('password', 'goodpassword'));
//       form.simulate('submit', { preventDefault: () => {} });
//       await nextTick();
//       wrapper.update();
//       let emailError = wrapper.find('.errorMessage').at(0);
//       expect(emailError.text()).toEqual('email is a required field');
//
//       // email must be a valid email
//       emailInput.simulate('change', changeVal('email', 'bademail'));
//       passwordInput.simulate('change', changeVal('password', 'goodpassword'));
//       form.simulate('submit', { preventDefault: () => {} });
//       await nextTick();
//       wrapper.update();
//       emailError = wrapper.find('.errorMessage').at(0);
//       expect(emailError.text()).toEqual('email must be a valid email');
//     });
//
//     it('displays correct password validation errors', async () => {
//       const emailInput = wrapper.find('input[name="email"]');
//       const passwordInput = wrapper.find('input[name="password"]');
//       const form = wrapper.find('form');
//
//       // password field can't be empty
//       emailInput.simulate('change', changeVal('email', 'good@email.com'));
//       form.simulate('submit', { preventDefault: () => {} });
//       await nextTick();
//       wrapper.update();
//       let passwordError = wrapper.find('.errorMessage').at(0);
//       expect(passwordError.text()).toEqual('password is a required field');
//
//       // password must be at least 8 chars
//       emailInput.simulate('change', changeVal('email', 'good@email.com'));
//       passwordInput.simulate('change', changeVal('password', '123'));
//       form.simulate('submit', { preventDefault: () => {} });
//       await nextTick();
//       wrapper.update();
//       passwordError = wrapper.find('.errorMessage').at(0);
//       expect(passwordError.text()).toEqual('password must be at least 8 characters');
//     });
//   });
// });

// };
