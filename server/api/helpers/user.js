
const argon2 = require('argon2');

module.exports = {


  friendlyName: 'User',


  description: 'User something.',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    // TODO
  },

  hashUserPassword:async(pass)=>{
    try {
       const hashPass =  await argon2.hash("password");
      return hashPass;
    } catch (error) {
      console.log(error)
      return 'hash password do not success';
    }

  },

  ValidateService:(req,res)=>{
    const {name,email,age,salary,address,password,phone}=req.body;
    if(!name||!email||!password||!phone){
      return res.json({success:false,messages:"missing Information"})
  }
  const regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/gm
const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gi;
const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm;
  const regexNumber = /[0-9]/gi;
  const regexPassword= /^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/gm;
    let checkName = regexName.test(name);
    let checkEmail = regexEmail.test(email);
    let checkPhone =regexPhone.test(phone);
    let checkPassword =regexPassword.test(password);
    //IF NAME ERROR
if(!checkName){
  return res.json({success:false,messages:"invalid username: ex:'Trần Đình Nam' or 'welliam harry'"})
}
//EMAIL ERROR
if(!checkEmail){
  return res.json({success:false,messages:"invalid email : ex: 'harry123rc@gmai.com'"})
}
//password ERROR
if(!checkPassword){
  return res.json({success:false,messages:"invalid password : ex: 'harry123456H@'"})
}
//PHONE ERROR
if(!checkPhone){
  return res.json({success:false,messages:"invalid NumberPhone : ex: '0855788894'"})
}
    //ALL GOOD

      let data = {
        name:name,
        age:age,
        address:address,
        salary:salary,
        email:email,
        password:password,
        phone:phone,

    }
   req.newUser = data;
    
   

  }




};

