/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function pedirComida(array) {
  // la funcion recibe un array de objetos en donde se detalla nombre y tipo de dieta de los integrantes de un meeting
  // debe retornar un objeto que diga cuantos menus de que tipo de dieta hay que pedir
  // (a fines practicos solo hay dieta "standard" y "vegan")
  // Por ej:
  // pedirComida([{nombre: "Harry", dieta: "standard"}, {nombre: "Luna", dieta: 'vegan'}, {nombre: "Goyle", dieta: "standard"}])
  // retorna {standard: 2, vegan: 1}
  // Tu código aca:
  let obj = {standard: 0, vegan: 0};
  for( let i = 0; i < array.length; i++) {
    let prop = array[i]["dieta"]
      if(prop == "standard"){
        obj.standard++
      } else if (prop == "vegan") {
        obj.vegan++
      } else {
        continue;
      }
  }
  return obj
}

// No modifiques nada debajo de esta linea //

module.exports = pedirComida