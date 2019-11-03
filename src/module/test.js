const sendMail = require('./sendMail/sendMail');

sendMail().then(rs=>{
    console.log(rs);
})