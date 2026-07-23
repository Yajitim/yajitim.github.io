export default async function handler(req, res) {
  const code = req.query.code;
  const client_id = process.env.OAUTH_CLIENT_ID;
  const client_secret = process.env.OAUTH_CLIENT_SECRET;

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id,
        client_secret,
        code,
      }),
    });

    const data = await response.json();
    const token = data.access_token;
    const provider = 'github';

    if (!token) {
      return res.status(400).send(`Authentication failed: ${JSON.stringify(data)}`);
    }

    const script = `
      <!DOCTYPE html>
      <html>
      <head><title>Authorizing...</title></head>
      <body>
      <script>
        (function() {
          function receiveMessage(e) {
            console.log("receiveMessage", e);
            window.opener.postMessage(
              'authorization:${provider}:success:${JSON.stringify({ token, provider })}',
              e.origin
            );
          }
          window.addEventListener("message", receiveMessage, false);
          window.opener.postMessage("authorizing:${provider}", "*");
        })()
      </script>
      </body>
      </html>
    `;
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(script);
  } catch (err) {
    res.status(500).send(`Server error: ${err.message}`);
  }
}
