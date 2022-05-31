import 'express-async-errors';

import { expect } from 'chai';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import supertest from 'supertest';

import { StatusCode } from '../../contracts/responses';
import { errorMiddleware } from '../../utils/middleware/error.middleware';
import { ApiController } from '../resources/api';

describe('Integration tests', () => {
  describe('Input validation tests', () => {
    let request: supertest.SuperTest<supertest.Test> = null;
    before(async () => {
      const app = express();
      app.use(express.json());
      app.use(express.urlencoded({ extended: true }));
      useExpressServer(app, {
        controllers: [ApiController],
        defaultErrorHandler: false,
      });
      app.use(errorMiddleware);
      request = supertest(app);
    });

    it('Invalid body should send bad request', async () => {
      const res = await request.post(`/tests/validations`).send({ val: 't' }).expect(StatusCode.badRequest);
      expect(res.body.message).equal('Error while validating body');
      expect(res.body.reason).equal('ValidationError');
    });

    it('Valid body should have successful request', async () => {
      const res = await request.post(`/tests/validations`).send({ val: 'test' }).expect(StatusCode.ok);
      expect(res.body.res).equal('test');
    });

    it('Invalid query should send bad request', async () => {
      const res = await request.get(`/tests/empty`).query({ val: 't' }).expect(StatusCode.badRequest);
      expect(res.body.reason).equal('ValidationError');
      expect(res.body.errors.val[0]).equal('val must be longer than or equal to 3 characters');
    });

    it('Valid query should have successful request', async () => {
      await request.get(`/tests/empty`).query({ val: 'test' }).expect(StatusCode.noContent);
    });
  });
});
