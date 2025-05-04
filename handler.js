'use strict';

module.exports.hello = async (event) => {
  const name = event.queryStringParameters?.name;
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name ?? 'World'}!`
    }),
  };
};
