import { createListRepresentation } from 'contracts/representations';
import { ResponseBase, StatusCode } from 'contracts/responses';
import express = require('express');
import { ClassType } from 'utils/types/classType';

export const representer = (representationType?: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (request: express.Request, response: express.Response, next: any) => {
    const responseObject = response.body;

    if (!responseObject) {
      response.status(StatusCode.noContent);
      return response.end();
    }

    if (!(responseObject instanceof ResponseBase)) {
      throw new Error('Incorrect response given in route');
    }

    response.status(responseObject.status);

    response.json(responseObject.getFormattedResponse(representationType));
  };
};

export const listRepresenter = (childType?: ClassType<any>) => representer(createListRepresentation(childType));
