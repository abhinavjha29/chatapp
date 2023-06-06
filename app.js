const express = require('express') ;
const app = express() ;
const path = require('path')

const bodyparser = require('body-parser') ;

const adminroute = require('./route/admin.js')

const msgroute = require('./route/msg.js') ;

//const loginroute = require('./route/login.js') ;

app.use(bodyparser.urlencoded({extended:false})) ;

app.use(adminroute) ;

app.use(msgroute) ;

//app.use(loginroute) ;
//console.log(__dirname) ;
 console.log(path.join(__dirname , 'view' ))
 app.use('/login', express.static(path.join(__dirname , 'view' ,'login.html' )))



app.listen(1900) ;
