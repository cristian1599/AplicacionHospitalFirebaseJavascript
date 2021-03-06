firebase.initializeApp({
    apiKey: "AIzaSyASyvTM3Wjtq75faXUodM2JkHMs9jIyle0",
    authDomain: "protectosoa2020hospitalcr.firebaseapp.com",
    projectId: "protectosoa2020hospitalcr"
  });

var db = firebase.firestore();
function listarParametro(){
    var tabla = document.getElementById('lista-pacientesParametro');
    var nombreParametro = document.getElementById('nombreParametro').value;
    var generoParametro = document.getElementById('generoParametro').value;
    db.collection("Paciente").where('nombre', "==", nombreParametro).get().then((querySnapshot) => {
       
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            tabla.innerHTML += `
            <tr>
            
            <td>${doc.id}</td> 
            <td>${doc.data().documento}</td> 
            <td>${doc.data().nombre}</td> 
            <td>${doc.data().correo}</td> 
            <td>${doc.data().telefono}</td> 
            <td>${doc.data().genero}</td> 
            </tr>
            `;
        });
    });
}
