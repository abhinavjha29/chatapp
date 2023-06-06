const express = require('express') ;
const router = express.Router() ;

router.get('/msg' ,(req ,res)=>{
    res.send(
        `<form  action ="/" method="POST" onsubmit = "document.getElementById('username').value = localStorage.getItem('username')"> 
        <input id="messege" type="text" name="messege">
        <input id= "username" type="hidden" name = "username">
        <br />
        <button type="submit">send</button>
        </form> 
        `
    )
    

})

module.exports = router ;