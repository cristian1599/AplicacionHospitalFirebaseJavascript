firebase.initializeApp({
    apiKey: "AIzaSyASyvTM3Wjtq75faXUodM2JkHMs9jIyle0",
    authDomain: "protectosoa2020hospitalcr.firebaseapp.com",
    projectId: "protectosoa2020hospitalcr"
  });

var db = firebase.firestore();
var tabla = document.getElementById('lista-Historial');
db.collection("Historial_Clinico").get().then((querySnapshot) => {
   
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