import { Forbidden } from 'contracts';

export const promiseAny = async promises => {
  let resolve;
  let reject;

  const returner = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  const errors = [];
  await Promise.all(
    promises.map(async (promise: Promise<any>) => {
      try {
        const res = await promise;
        resolve(res);
        promises.forEach(p => {
          p.cancel();
        });
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
