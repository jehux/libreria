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
