firebase.initializeApp({
    apiKey: "AIzaSyASyvTM3Wjtq75faXUodM2JkHMs9jIyle0",
    authDomain: "protectosoa2020hospitalcr.firebaseapp.com",
    projectId: "protectosoa2020hospitalcr"
  });
  

  

function buscarPaciente(){
   
    var db = firebase.firestore();
    var documentoParametro = document.getElementById('documentoParametro').value;
    db.collection("Paciente").where('documento', "==", documentoParametro).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            documentoBuscarP.value = doc.data().documento;
            nombreBuscarP.value = doc.data().nombre;
            correoBuscarP.value = doc.data().correo;
            telefonoBuscarP.value = doc.data().telefono;
            generobuscarP.value = doc.data().genero;
        
})


    })

   
}


function modificarPaciente(){
    
var db = firebase.firestore();
var documentoParametro = document.getElementById('documentoParametro').value;

db.collection("Paciente").where('documento', "==", documentoParametro).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);

        var washingtonRef = db.collection("Paciente").doc(doc.id);
        var documento = document.getElementById('documentoBuscarP').value;
        var nombre = document.getElementById('nombreBuscarP').value;
        var correo = document.getElementById('correoBuscarP').value;
        var telefono = document.getElementById('telefonoBuscarP').value;
        var genero = document.getElementById('generobuscarP').value;
        // Set the "capital" field of the city 'DC'
        return washingtonRef.update({
            documento: documento,
                nombre: nombre,
                correo: correo,
                telefono:telefono,
                genero: genero,
        })
        
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
            
        });



    });
});


}
