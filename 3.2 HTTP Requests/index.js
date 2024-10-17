import express from 'express';
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {                                                // about is a endpoints means where our program gonna a stop
  res.send("<h1>About Me</h1><p>My name is Angela</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.post("/contact", (req, res) => {
  const name = req.body;
  res.send("jyiu");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
