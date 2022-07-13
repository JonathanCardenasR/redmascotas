class post {
  constructor(titulo,cuerpo){
    this.titulo= titulo,
    this.cuerpo = cuerpo
  }

  get getTitulo(){
    return this.titulo;
  }

  set setTitulo(titulo){
    this.titulo = titulo;
  }

  get getCuerpo(){
    return this.cuerpo;
  }

  set setCuerpo(cuerpo){
    this.cuerpo= cuerpo;
  }

}

module.exports = post;