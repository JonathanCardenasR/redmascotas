const moment = require('moment');

class mensaje {
  constructor(username,text){
    this.username= username,
    this.text = text,
    this.time = moment().format('h:mm a')
  }

  get getUsername(){
    return this.username;
  }

  set setUsername(username){
    this.nombre = username;
  }

  get getText(){
    return this.text;
  }

  set setText(text){
    this.text= text;
  }

  get getTime(){
    return this.time;
  }

  set setTime(time){
    this.time = time;
  }
   
}

module.exports = mensaje;