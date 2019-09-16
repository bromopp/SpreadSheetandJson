  function checkform(){
    idrow1= document.getElementById("Idrow1").value;
    idrow2= document.getElementById("Idrow2").value;
    idrow3= document.getElementById("Idrow3").value;
    idrow4= document.getElementById("Idrow4").value;
    var idlist=[idrow1,idrow2,idrow3,idrow4];
    if(!hasDuplicates(idlist)){
      
      toJson();
    }else{      
      alert("Verificar que no se repita ningun Id")
    }
    
  }

function hasDuplicates(array) {
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

  var datalist = [
    {"id": idrow1, "value": vrow1},
      {"id": idrow2, "value": vrow2},
      {"id": idrow3, "value": vrow3},
      {"id": idrow4, "value": vrow4}]

  var result = {};
  result.Datos = datalist;

  var resultjson = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(result, null, 4));
var fileName= 'result.json';
var fileToSave = new Blob([resultjson],{
  type: 'application/json',
  name: fileName
});

  var a = document.createElement('a');
  a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(result, null, 4)));
  a.setAttribute('download', fileName);
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
