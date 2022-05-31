import 'express-async-errors';

import { expect } from 'chai';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import supertest from 'supertest';

import { StatusCode } from '../../contracts/responses';
import { ApiController } from '../resources/api';

describe('Integration tests', () => {
  describe('Output validation tests', () => {
    let request: supertest.SuperTest<supertest.Test> = null;
    before(async () => {
      const app = express();
      app.use(express.json());
      useExpressServer(app, {
        controllers: [ApiController],
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

    it('Should get list response', async () => {
      const res = await request.get(`/tests/list`).expect(StatusCode.ok);
      expect(res.body.count).equal(10);
      expect(res.body.items[0].stripped).undefined;
      expect(res.body.items[0].res).equal('response');
      expect(res.body.items[0].lower).equal('upper case');
    });

    it('Should get array response', async () => {
      const res = await request.get(`/tests/array`).expect(StatusCode.ok);
      expect(res.body[0].stripped).undefined;
      expect(res.body[0].res).equal('response');
    });
  });
});
