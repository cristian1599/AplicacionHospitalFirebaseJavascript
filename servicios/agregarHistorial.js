firebase.initializeApp({
    apiKey: "AIzaSyASyvTM3Wjtq75faXUodM2JkHMs9jIyle0",
    authDomain: "protectosoa2020hospitalcr.firebaseapp.com",
    projectId: "protectosoa2020hospitalcr"
  });
  
  var db = firebase.firestore();

  var combo = document.getElementById('select_paciente');
  db.collection("Paciente").get().then((querySnapshot) => {
     
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          combo.innerHTML += `

          <option>${doc.data().documento} </option>
          
          `;
      });
  });

  var comboEnfermedad = document.getElementById('select_enfermedad');
  db.collection("Enfermedad").get().then((querySnapshot) => {
     
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          comboEnfermedad.innerHTML += `

          <option>${doc.data().Codigo} </option>
          
          `;
      });
  });



  function agregarHistorial()
  {
      var numeroHistoria = document.getElementById("numeroH").value
      var numeroHistoriaNumber = document.getElementById("numeroH").value
      var nombreDoctor = document.getElementById("nombreD").value;
      var documentoPaciente = document.getElementById("select_paciente").value;
      var codigoEnfermedad = document.getElementById("select_enfermedad").value;

      
    db.collection("Historial_Clinico").doc(numeroHistoria).set({
       
        numero_historia: parseInt(numeroHistoriaNumber),
        nombre_doctor: nombreDoctor,
        documento_paciente: documentoPaciente,
        codigo_enfermedad:parseInt(codigoEnfermedad),
       
       
        
    })
    .then(function(docRef) {
       alert('Historial Clinico agregado con exito')
       numeroHistoria = document.getElementById("numeroH").value = "";
       nombreDoctor = document.getElementById("nombreD").value = "";
       documentoPaciente = document.getElementById("documentoH").value = "";
       codigoEnfermedad = document.getElementById("codigoE").value = "";

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

  }