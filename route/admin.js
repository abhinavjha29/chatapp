const express = require('express') ;

const router = express.Router() ;
const fs = require('fs') ;

router.post('/',(req ,res )=>{
    // console.log(req.body.username) ;
    // console.log(req.body.messege) ;
    if(req.body.messege===undefined) {
        //console.log(1) ;
        res.redirect('/msg') ;

    }
    else {
    
        fs.writeFile("username.txt" ,`${req.body.username}: ${req.body.messege}` , {flag: 'a'} ,(err)=>{
            if(err) {
                console.log(err) ;
            }
            else res.redirect('/') ;
        } ) 
    }
    

})

router.get('/',(req ,res)=>{
    console.log(req.body.messege) ;
    
fs.readFile('username.txt' ,(err ,data)=>{
    //console.log(req.body.messege)
    if(err) {
        console.log(err) ;
        }
        else res.send(
            `${data}<form action="/" method="POST" onsubmit = "document.getElementById('username').value = localStorage.getItem('username')"> 
            <input id="messege" type="text" name="messege">
            <input id= "username" type="hidden" name = "username">
            <br />
            <button type="submit">send</button>
            </form> 
            `
        )
})

});

module.exports = router ;
