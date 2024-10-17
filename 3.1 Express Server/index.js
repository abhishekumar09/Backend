// new way
import express from "express";
const app = express();                                   // express is object there
const port = 3000;

app.listen(port, () => {                                 // listen is method  and their is 2 parameters one is port basically port is the location of our server where we r going to listening for requests from th client-side.   And 2nd one is CALLBACK function that istgoing to be triggered when our server is set up. 
  console.log(`Server running on port ${port}.`);
});



// old way
/*
     ALso write like 


import express from "express";
const app = express();                                   // express is object there


app.listen(3000, () => {                                 // listen is method  and their is 2 parameters one is port basically port is the location of our server where we r going to listening for requests from th client-side.   And 2nd one is CALLBACK function that istgoing to be triggered when our server is set up. 
  console.log("Server running on port 3000.");
})   */





  //  netstat -ano | findstr "LISTENING"                  // this command show be able to see all the ports that are actually currently actively listening for outside interaction.        // keynote has its own port  thats the door its going to access my computer to try and change these slides.