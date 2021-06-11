// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
  apiKey: "AIzaSyCLvysi31ymRWOAtiDcYNx55JdHF7Fi-bw",
  authDomain: "bibliotexa.firebaseapp.com",
  projectId: "bibliotexa",
  storageBucket: "bibliotexa.appspot.com",
  messagingSenderId: "945767195250",
  appId: "1:945767195250:web:d8f60823814e0f744158eb",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

/* db.collection("Cita")
  .add({
    Fecha_Creada: 1623380121,
    Fecha_Cita: 1623380121,
    ID_Usuario: "iYP0NOHLTFrYojcqDq5u",
    ID_libros: ["5uyQdrMwRs6XNzMnH0e9", "7euXeygBbgbOwjTx3SbF"],
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  }); */

db.collection("Libro")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });

  var libros = document.querySelector('#libro')


var docRef = db.collection("Libro")
docRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data().Titulo);
        libros.innerHTML += `
        </div>
        <div class="card" style="width: 18rem;">
        <img src="https://4.bp.blogspot.com/-p3WLzI73jiU/W3F9nOfRZdI/AAAAAAAABOU/6Umu0QlXe4UZCnvE_MR2_8tJh2NWZ1jPwCLcBGAs/s1600/libro.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${doc.data().Titulo}</h5>
            <p class="card-text">${doc.data().Notas}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Autor: ${doc.data().Autor}</li>
            <li class="list-group-item">Edicion: ${doc.data().Edicion}</li>
            <li class="list-group-item">Editorial: ${doc.data().Editorial}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Ver libro</a>
            <a href="#" class="card-link">Seleccionar cita</a>
        </div>
        </div>
        `
    });
});