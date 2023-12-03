import request from 'supertest';
import app from '../src/app';

describe('quickform', () => {
  it('responds with errors when empty POST body', (done) => {
    request(app)
      .post('/quickform')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        401,
        {
          success: false,
          errors: {
            email: 'Email is required',
            message: 'Message is required',
          },
        },
        done,
      );
  });

  it('sends root error when message contains "dinosaur"', (done) => {
    request(app)
      .post('/quickform')
      .set('Accept', 'application/json')
      .send({
        email: 'anon@random.com',
        message: 'That was a great dinosaur you found today.',
      })
      .expect('Content-Type', /json/)
      .expect(
        401,
        {
          success: false,
          errors: {
            root: 'Message should not contain dinosaur',
          },
        },
        done,
      );
  });

  it('Successful response with valid login', (done) => {
    request(app)
      .post('/quickform')
      .set('Accept', 'application/json')
      .send({ email: 'test@test.com', message: 'test message' })
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
