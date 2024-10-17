import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  //Test code
  // weekend:
  // new Date("June 24, 2023 11:13:00");
  // weekday:
  // new Date("June 20, 2023 11:13:00");
  const day = today.getDay();           // getDayy() is a object

  // console.log(day);
  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {       //Day = 0 means sunday
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("solution.ejs", {               // res.render is used for the dynamic website and he res.file is used for static website
    dayType: type,                 // datatype is the property
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
