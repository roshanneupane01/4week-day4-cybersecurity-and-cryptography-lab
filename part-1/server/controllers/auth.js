const bcrypt = require("bcryptjs");
const users = [];

module.exports = {
  register: (req, res) => {
    let {username, password} = req.body
    let salt = bcrypt.genSaltSync(10)
    let hashedPass = bcrypt.hashSync(password, salt)
    let newUser = {
      username: username,
      hashedPass: hashedPass
    }
    users.push(newUser);
    res.status(200).send(req.body);
  },
  login: (req, res) => {
    let {username, password} = req.body
    let checkUser = users.filter((user)=>user.username === username)
    if(checkUser.length !== 0){
      let validPassword = bcrypt.compareSync(password, checkUser[0].hashedPass)
      if(validPassword){
        let saveObject = {username:checkUser[0].username}
        return res.status(200).send(saveObject)
      }else{
        return res.status(401).send("Password is incorrect.")
      }
    }else{
      res.status(401).send("Username is invalid!")
    }
  }
};
