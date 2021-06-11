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

const formulario = document.querySelector('#formulario')
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')
const error = document.querySelector('#error')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    if(!email.value.trim()){
        console.log('input vacio')
        return
    }else if(!pass.value.trim()){
        console.log('input vacio')
        return
    }
    
    firebase.firestore().collection('Usuario')
        .onSnapshot(query => {
            query.forEach(doc =>{
                console.log(doc.data())
                if(doc.data().Correo == email.value && doc.data().Password == pass.value){
                    console.log('Encontrado')
                }
                else{
                    console.log('No encontrado')
                    return
                }
            })
        })
    
})

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
        <div class="col-md-4">
            <div class="info">
              <div class="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                <i class="ni ni-book-bookmark"></i>
              </div>
              <h6 class="info-title text-uppercase text-primary">${doc.data().Titulo}</h6>
              <p class="description opacity-8">${doc.data().Notas}</p>
              <a href="javascript:;" class="text-primary">Ver libro
                <i class="ni ni-bold-right text-primary"></i>
              </a>
            </div>
          </div>
        `
    });
});