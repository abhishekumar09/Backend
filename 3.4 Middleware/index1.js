import express from "express";
import { dirname } from "path";              // import the diectory name from path module thhat bundeled with Node
import { fileURLToPath } from "url";                               
const __dirname = dirname(fileURLToPath(import.meta.url));                      // little bit conversion

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");          //res.sendFile  use to requires an exact path in order to know which file to send back.
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);        
});
