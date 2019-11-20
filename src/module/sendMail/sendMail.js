const nodemailer = require('nodemailer');
const config = require('./config');
const MailContent = require('../../config/mailContent')
module.exports=()=>{
    return new Promise((resolve,reject)=>{
        const transporter =nodemailer.createTransport(config.tranporter);
        var mailOptions = MailContent.expiredMail();
        transporter.sendMail(mailOptions,(err,info)=>{
            if(err) {return(resolve({
                code:'420',
                message:'err send mail'+err
            }))}else{
                return(resolve({
                    code:'200',
                    message:'send mail is ok'
                }))
            }
        })
    })

}