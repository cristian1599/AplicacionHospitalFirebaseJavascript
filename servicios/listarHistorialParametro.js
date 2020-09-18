firebase.initializeApp({
    apiKey: "AIzaSyASyvTM3Wjtq75faXUodM2JkHMs9jIyle0",
    authDomain: "protectosoa2020hospitalcr.firebaseapp.com",
    projectId: "protectosoa2020hospitalcr"
  });

var db = firebase.firestore();
function listarParametroDoctor(){
    var tabla = document.getElementById('lista-HistorialParametro');
    var nombreParametro = document.getElementById('nombreDoctor').value;
    db.collection("Historial_Clinico").where('nombre_doctor', "==", nombreParametro).get().then((querySnapshot) => {
       
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            tabla.innerHTML += `
            <tr>
            
            <td>${doc.id}</td> 
            <td>${doc.data().numero_historia}</td> 
            <td>${doc.data().nombre_doctor}</td> 
            <td>${doc.data().documento_paciente}</td> 
            <td>${doc.data().codigo_enfermedad}</td> 
            
            </tr>
            `;
        });
    });
}

function listarParametroCodigo(){
    var tabla = document.getElementById('lista-HistorialParametro');
    var codigo = document.getElementById('codifoEnfermedadP').value;
    db.collection("Historial_Clinico").where('codigo_enfermedad', "==", parseInt(codigo)).get().then((querySnapshot) => {
       
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            tabla.innerHTML += `
            <tr>
            
            <td>${doc.id}</td> 
            <td>${doc.data().numero_historia}</td> 
            <td>${doc.data().nombre_doctor}</td> 
            <td>${doc.data().documento_paciente}</td> 
            <td>${doc.data().codigo_enfermedad}</td> 
            
            </tr>
            `;
        });
    });
}
