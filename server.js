
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');

var nodemailer = require('nodemailer');



let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    port: 25,
    auth: {
        user: "insoocode123@gmail.com",
        pass: "givemeajob!"
    },
    tls: {
        rejectUnauthorized: false
    }
});




app.use(express.static(path.join(__dirname, './myportfolioApp/dist')));





app.post("/myportfolio/send", function(req, res) {
  console.log("sent to server");
  let helperOptions = {
    from: "Website portfolio",
    to: "isyang1223@gmail.com",
    subject: req.body.name + " " + req.body.email,
    text: req.body.message
  };
  transporter.sendMail(helperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      res.json({ message: "Success" });
    }
  });
});










app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./myportfolioApp/dist/index.html"))
});



// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})