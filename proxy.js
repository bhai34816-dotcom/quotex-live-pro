const fetch = require('node-fetch');
exports.handler = async function(event, context) {
  const q = (event.queryStringParameters && event.queryStringParameters.url) || null;
  if(!q) return { statusCode: 400, body: 'missing url' };
  try {
    const res = await fetch(q, { timeout: 10000 });
    const text = await res.text();
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: text
    };
  } catch (err) {
    return { statusCode: 500, body: String(err) };
  }
};
