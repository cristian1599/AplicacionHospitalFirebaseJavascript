firebase.initializeApp({
    apiKey: "AIzaSyASyvTM3Wjtq75faXUodM2JkHMs9jIyle0",
    authDomain: "protectosoa2020hospitalcr.firebaseapp.com",
    projectId: "protectosoa2020hospitalcr"
  });
  

function buscarHistorial(){
    var db = firebase.firestore();
    var numeroParametro = document.getElementById('numeroParametro').value;
    db.collection("Historial_Clinico").where('numero_historia', "==",  parseInt(numeroParametro)).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            numeroHistoria.value = doc.data().numero_historia;
            nombreMedico.value = doc.data().nombre_doctor;
            documentoHistorial.value = doc.data().documento_paciente;
            codigoEnfermedadH.value = doc.data().codigo_enfermedad;
            
        
});
    });
}

function modificarHistorial(){
    
    var db = firebase.firestore();
    var numeroParametro = document.getElementById('numeroParametro').value;
    
    db.collection("Historial_Clinico").where('numero_historia', "==",  parseInt(numeroParametro)).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
    
            var washingtonRef = db.collection("Historial_Clinico").doc(doc.id);
            var numero_historia = document.getElementById('numeroHistoria').value;
            var nombre_doctor = document.getElementById('nombreMedico').value;
            var documento_paciente = document.getElementById('documentoHistorial').value;
            var codigo_enfermedad = document.getElementById('codigoEnfermedadH').value;
           
            // Set the "capital" field of the city 'DC'
            return washingtonRef.update({
                numero_historia: parseInt(numero_historia),
                nombre_doctor: nombre_doctor,
                documento_paciente: documento_paciente,
                codigo_enfermedad:  parseInt(codigo_enfermedad),
            })
            
            .then(function() {
                alert('Historial Clinico Modificado con exito')
                console.log("Document successfully updated!");
                 numeroParametro = document.getElementById('numeroParametro').value = "";
                 numero_historia = document.getElementById('numeroHistoria').value = "";
                 nombre_doctor = document.getElementById('nombreMedico').value = "";
                 documento_paciente = document.getElementById('documentoHistorial').value = "";
                 codigo_enfermedad = document.getElementById('codigoEnfermedadH').value = "";
               

            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    
    
    
        });
    });
    
    
    }
    