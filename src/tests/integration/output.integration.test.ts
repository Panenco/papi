import 'express-async-errors';

import { expect } from 'chai';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import supertest from 'supertest';

import { StatusCode } from '../../contracts/responses';
import { DevController } from '../resources/expressTestClasses';

describe('Integration tests', () => {
  describe('Output validation tests', () => {
    let request: supertest.SuperTest<supertest.Test> = null;
    before(async () => {
      const app = express();
      app.use(express.json());
      useExpressServer(app, {
        controllers: [DevController],
        defaultErrorHandler: false,
      });
      request = supertest(app);
    });

    it('Should strip unknown properties from async method', async () => {
      const res = await request.post(`/tests/asyncresponse`).expect(StatusCode.ok);
      expect(res.body.res).equal('async test');
      expect(res.body.stripped).undefined;
    });

    it('Should strip unknown properties from sync method', async () => {
      const res = await request.post(`/tests/validations`).send({ val: 'test' }).expect(StatusCode.ok);
      expect(res.body.res).equal('test');
      expect(res.body.stripped).undefined;
    });

    it('Should have empty response body', async () => {
      const res = await request.get(`/tests/empty`).query({ val: 'test' }).expect(StatusCode.noContent);
      expect(res.body).deep.eq({});
    });
  });
});

console.log('test2');
