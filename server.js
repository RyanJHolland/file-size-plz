var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post("/fileupload", upload.single('fileToUpload'), function (req, res) {
  console.log(req.file.size);
  res.json({size: req.file.size});
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
