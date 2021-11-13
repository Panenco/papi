import { Forbidden } from 'contracts';

export const promiseAny = async (promises: Promise<any>[] | any[]) => {
  let resolve: (value: unknown) => void;
  let reject: (reason?: unknown) => void;

  const returner = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  const errors = [];
  await Promise.all(
    promises.map(async (promise: Promise<any> | any[]) => {
      try {
        const res = await promise;
        resolve(res);
      } catch (error) {
        errors.push(error);
      }
    }),
  );

  if (errors.length === promises.length) {
    reject(new Forbidden('forbidden', errors.map(e => e.reason).join(', ')));
  }

  return returner;
};
