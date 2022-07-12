class vet {
  constructor(nombre,direccion,telefono){
    this.nombre= nombre,
    this.direccion = direccion,
    this.telefono= telefono
  }

  get getnombre(){
    return this.nombre;
  }

  set setNombre(nombre){
    this.nombre= nombre;
  }
  
  get getDireccion(){
    return this.direccion;
  }

  set setdireccion(direccion){
    this.direccion = direccion;
  }

  get getTelefono(){
    return this.telefono;
  }

  set setTelefono(telefono){
    this.telefono = telefono;
  }
   
}

module.exports = vet;