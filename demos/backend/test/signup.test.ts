import request from 'supertest';
import app from '../src/app';

describe('signup', () => {
  console.error = jest.fn();

  const postBody = {
    email: 'new@user.com',
    password: '12345678',
    passwordConfirm: '12345678',
  };

  it('responds with errors when empty POST body', (done) => {
    request(app)
      .post('/signup')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        401,
        {
          success: false,
          errors: {
            email: 'Email is required',
            password: 'Password is required',
            passwordConfirm: 'Password confirm is required',
          },
        },
        done,
      );
  });

  it.skip('handles account already exists', (done) => {
    request(app)
      .post('/signup')
      .set('Accept', 'application/json')
      .send({ ...postBody, email: 'test@test.com' })
      .expect('Content-Type', /json/)
      .expect(
        401,
        {
          success: false,
          errors: {
            root: 'Invalid credentials',
          },
        },
        done,
      );
  });

  it('Successful response with valid signup', (done) => {
    request(app)
      .post('/signup')
      .set('Accept', 'application/json')
      .send(postBody)
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          success: true,
          errors: {},
        },
        done,
      );
  });
});
