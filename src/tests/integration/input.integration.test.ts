import 'express-async-errors';

import { expect } from 'chai';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import supertest from 'supertest';

import { errorMiddleware } from '../../utils/middleware/error.middleware';
import { DevController } from '../resources/expressTestClasses';

describe('Integration tests', () => {
  describe('Input validation tests', () => {
    let request: supertest.SuperTest<supertest.Test> = null;
    before(async () => {
      const app = express();
      app.use(express.json());
      app.use(express.urlencoded({ extended: true }));
      useExpressServer(app, {
        controllers: [DevController],
        defaultErrorHandler: false,
      });
      app.use(errorMiddleware);
      request = supertest(app);
    });

    it('Invalid body should send bad request', async () => {
      const res = await request.post(`/tests/validations`).send({ val: 't' });
      expect(res.body.message).equal('Error while validating body');
      expect(res.body.reason).equal('ValidationError');
    });
  });
});

console.log('test2');
