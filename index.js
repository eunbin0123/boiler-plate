const express = require('express'); //express 모듈을 가져옴
const app = express(); //function을 이용해 새로운 express app 생성
const port = 5000; //상관 없음

const mongoose = require('mongoose');

mongoose
.connect('mongodb+srv://eunbin:eunbin0123@boilerplate.5usui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch((e) => console.log('MongoDB error: ', e));
app.get('/', (req,res) => res.send('Hello World!')); //루트 디렉토리에 Hello world를 출력

app.listen(port, () => console.log(`Example app listening on port ${port}!`));