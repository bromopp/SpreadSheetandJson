  function checkform(){
    idrow1= document.getElementById("Idrow1").value;
    idrow2= document.getElementById("Idrow2").value;
    idrow3= document.getElementById("Idrow3").value;
    idrow4= document.getElementById("Idrow4").value;
    var idlist=[idrow1,idrow2,idrow3,idrow4];
    // Verifica que no haya duplicados en el array
    if(!hasDuplicates(idlist)){
      
      toJson();
    }else{      
      alert("Verificar que no se repita ningun Id")
    }
    
  }

function hasDuplicates(array) {
  //Crea un set y compara el tamaño de este con el largo del array, si no es igual significa que se agruparon
  //ids por tener el mismo valor y por ende el tamaño del set es mas chico que el largo del array
  return (new Set(array)).size !== array.length;
}
function toJson() {
  idrow1= document.getElementById("Idrow1").value;
  idrow2= document.getElementById("Idrow2").value;
  idrow3= document.getElementById("Idrow3").value;
  idrow4= document.getElementById("Idrow4").value;
  vrow1= document.getElementById("Valuerow1").value;
  vrow2= document.getElementById("Valuerow2").value;
  vrow3= document.getElementById("Valuerow3").value;
  vrow4= document.getElementById("Valuerow4").value;
//Se traen todos los valores seteados y se los ordena dentro de un objeto
  var datalist = [
    {"id": idrow1, "value": vrow1},
      {"id": idrow2, "value": vrow2},
      {"id": idrow3, "value": vrow3},
      {"id": idrow4, "value": vrow4}]

  var result = {};
  result.Datos = datalist;
var fileName= 'result.json';
//Se crea un elemento para que dispare la descarga
  var a = document.createElement('a');
//Se asigna el objeto creado anteriormente como atributo href y se le da formato
  a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(result, null, 4)));
  a.setAttribute('download', fileName);
  a.style.display = 'none';
  document.body.appendChild(a);
//se dispara la descarga del archivo
  a.click();
  document.body.removeChild(a);
}
