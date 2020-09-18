firebase.initializeApp({
    apiKey: "AIzaSyASyvTM3Wjtq75faXUodM2JkHMs9jIyle0",
    authDomain: "protectosoa2020hospitalcr.firebaseapp.com",
    projectId: "protectosoa2020hospitalcr"
  });
  
  var db = firebase.firestore();

  function buscarPaciente(){
  
    var documentoParametro = document.getElementById('documentoEliminarParametro').value;
    db.collection("Paciente").where('documento', "==", documentoParametro).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            documentoEliminar.value = doc.data().documento;
            nombreEliminar.value = doc.data().nombre;
            correoEliminar.value = doc.data().correo;
            telefonoEliminar.value = doc.data().telefono;
            generoEliminar.value = doc.data().genero;
        
});
    });
}
function eliminarPacientes(){
    var documentoParametro = document.getElementById('documentoEliminarParametro').value;
    db.collection("Paciente").doc(documentoParametro).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}



  