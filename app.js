const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Hello World</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
      </body>
    </html>  
  `);
});

app.get("/env", (_, res) => {
  res.send(process.env);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
