var express = require("express");
var parseurl = require("parseurl");
var session = require("express-session");
var FileStore = require('session-file-store')(session);
 
var fileStoreOptions = {};

var app = express();
//세션 객체 추가
app.use(
  session({
    secret: "keyboard cat",  //노출되면 안되는 것
    resave: false, //세션 데이터가 바뀌기 전까지 저장소의 값을 저장x
    saveUninitialized: true, //session이 필요하기전까지 구동X 
    store: new FileStore(fileStoreOptions),
  })
);
//세션 데이터는 디폴트로 메모리에 저장 -> 휘발성
//그래서 
app.get('/', function (req, res, next) {
  console.log(req.session);
  res.send("Hello"); 
});


app.listen(3000, function () {
  console.log("3000!");
});
