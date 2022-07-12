class User {
  constructor(){
    this.nombre= '',
    this.apellido = '',
    this.usuario = '',
    this.password = '',
    this.email =  '',
    this.foto =  '',
    this.fotoPortada = '',
    this.listaAmigos = null
  }

  get getNombre(){
    return this.nombre;
  }

  set setNombre(nombre){
    this.nombre = nombre;
  }

  get getApellido(){
    return this.apellido;
  }

  set setApellido(apellido){
    this.apellido = apellido;
  }

  get getPassword(){
    return this.password;
  }

  set setPassword(password){
    this.password = password;
  }

  get getEmail(){
    return this.email;
  }

  set setEmail(email){
    this.email = email;
  }

  get getFoto(){
    return this.foto;
  }

  set setFoto(foto){
    this.foto = foto;
  }

  get getFotoPortada(){
    return this.fotoPortada;
  }

  set setFotoPortada(fotoPortada){
    this.fotoPortada = fotoPortada;
  }

  get getListaAmigos(){
    return this.listaAmigos;
  }

  set setListaAmigos(listaAmigos){
    this.listaAmigos = listaAmigos;
  }
   
}

module.exports = User;