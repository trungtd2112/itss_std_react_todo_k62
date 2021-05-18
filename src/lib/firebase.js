import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCnbeL4-j73fBuenudaVcgAcxvFeDriueo",
    authDomain: "trung-fb-sample-cda2e.firebaseapp.com",
    projectId: "trung-fb-sample-cda2e",
    storageBucket: "trung-fb-sample-cda2e.appspot.com",
    messagingSenderId: "1030512747081",
    appId: "1:1030512747081:web:f3072361faf55c76161598"
};

firebase.initializeApp(firebaseConfig);

// reference to totos collection
const collection = firebase.firestore().collection("todos");

// get items
export const getFbItems = async () => {
    const data = await collection.get();
    const items = data.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
}

//add item
export const addFbItem = async (item) => {
    await collection.add(item);
}

//update item
export const updateFbItem = async (item, id) => {
    await collection.doc(id).update(item);
}

//delete item
export const deleteFbItem = async (item) => {
  const todoRef = collection.doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
}; 