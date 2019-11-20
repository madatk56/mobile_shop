const expiredMail =()=>{
    return({
         from:'admin',
         to:process.env.adminMail,
         subject:'expiration product',
         text:'test1'
     })
 }
 module.exports ={
     expiredMail
 }