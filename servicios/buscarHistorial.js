firebase.initializeApp({
    apiKey: "AIzaSyASyvTM3Wjtq75faXUodM2JkHMs9jIyle0",
    authDomain: "protectosoa2020hospitalcr.firebaseapp.com",
    projectId: "protectosoa2020hospitalcr"
  });
  

function buscarHistorial(){
    var db = firebase.firestore();
    var numeroParametro = document.getElementById('numeroHistoriaParametro').value;
  
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