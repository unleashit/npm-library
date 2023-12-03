import request from 'supertest';
import app from '../src/app';

describe('login', () => {
  it('responds with errors when empty POST body', (done) => {
    request(app)
      .post('/login')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        401,
        {
          success: false,
          errors: {
            email: 'Email is required',
            password: 'Password is required',
            root: 'Invalid credentials',
          },
        },
        done,
      );
  });

  it('responds correctly to invalid credentials', (done) => {
    request(app)
      .post('/login')
      .set('Accept', 'application/json')
      .send({ email: 'anon@random.com', password: '123' })
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

  it('Successful reponse with valid login', (done) => {
    request(app)
      .post('/login')
      .set('Accept', 'application/json')
      .send({ email: 'test@test.com', password: '12345678' })
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
