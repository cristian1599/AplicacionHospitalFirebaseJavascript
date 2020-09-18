firebase.initializeApp({
    apiKey: "AIzaSyASyvTM3Wjtq75faXUodM2JkHMs9jIyle0",
    authDomain: "protectosoa2020hospitalcr.firebaseapp.com",
    projectId: "protectosoa2020hospitalcr"
  });
  
  var db = firebase.firestore();
  function buscarHistorial(){
    var db = firebase.firestore();
    var numeroParametro = document.getElementById('numeroParametro').value;
    db.collection("Historial_Clinico").where('numero_historia', "==", parseInt(numeroParametro)).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            numeroHistoria.value = doc.data().numero_historia;
            nombreMedico.value = doc.data().nombre_doctor;
            documentoHistorial.value = doc.data().documento_paciente;
            codigoEnfermedadH.value = doc.data().codigo_enfermedad;
            
        
});
    });
}
function eliminarHistorial(){
    var documentoParametro = document.getElementById('numeroParametro').value;
    db.collection("Historial_Clinico").doc(documentoParametro).delete().then(function() {
    alert('Historial Eliminado con exito')
    console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}

