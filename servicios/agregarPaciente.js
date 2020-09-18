firebase.initializeApp({
    apiKey: "AIzaSyASyvTM3Wjtq75faXUodM2JkHMs9jIyle0",
    authDomain: "protectosoa2020hospitalcr.firebaseapp.com",
    projectId: "protectosoa2020hospitalcr"
  });
  
  var db = firebase.firestore();


function agregarPaciente(){
    var documento = document.getElementById('documentoP').value;
    var nombre = document.getElementById('nombreP').value;
    var correo = document.getElementById('correoP').value;
    var telefono = document.getElementById('telefonoP').value;
    var genero = document.getElementById('generoP').value;

    db.collection("Paciente").doc(documento).set({
       
        documento: documento,
        nombre: nombre,
        correo: correo,
        telefono:telefono,
        genero: genero,
        
    })
    .then(function(docRef) {
        
        alert('Paciente agregado con exito')
        documento = document.getElementById('documentoP').value = "";
        nombre = document.getElementById('nombreP').value = "";
        correo = document.getElementById('correoP').value = "";
        telefono = document.getElementById('telefonoP').value = "";
        genero = document.getElementById('generoP').value = "";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
  