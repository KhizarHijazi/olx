import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { fetchDataFromApi } from "./api";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDE4pdbec9IvIznwdieZ1a4exQQ4LmafcQ",
    authDomain: "olx-react-9f473.firebaseapp.com",
    projectId: "olx-react-9f473",
    storageBucket: "olx-react-9f473.appspot.com",
    messagingSenderId: "1097658056062",
    appId: "1:1097658056062:web:41bcb5ac4b9cc0ac08872f",
    measurementId: "G-RG3YBTY75X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


// Auth Register

export async function register(userInfo) {
    const { fullname, email, password } = userInfo
    const { user: { uid } } = await createUserWithEmailAndPassword(auth, email, password)
    const userRef = doc(db, 'Users', uid);
    setDoc(userRef, { fullname, email, password });
    alert('You are now registered.Be sure to log in.')

}

//Auth Login Auth

export async function login(userInfo) {
    const { email, password } = userInfo
    await signInWithEmailAndPassword(auth, email, password)
    alert('You have successfully logged in')
}

// Add Data To FireStore

export async function addDataToFireStore() {
    try {
        const apiData = await fetchDataFromApi();
        console.log(apiData.products)
        apiData.products.map(async (dataitems) => {
            const docRef = await addDoc(collection(db, "Products"), dataitems);
            console.log(docRef)
            console.log("Document written with ID: ", docRef.id);
        })
        console.log("All documents added to Firestore");
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}



// Get Data From FireStore

export const getDataFromFirestore = async () => {

    const querySnapshot = await getDocs(collection(db, "Products"));
    const products = []

    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        products.push({ id: doc.id, ...doc.data() })
    })

    return products

}

getDataFromFirestore()
    .then((products) => {
        console.log("Products from Firestore:", products);
    })
    .catch((error) => {
        console.error("Error fetching data from Firestore:", error);
    });

// Add olx post data to Firestore

export const addOlxPostDataToFirestore = async (productInfo, images) => {
    // try {
    //     const docRef = await addDoc(collection(db, "Products"), productData);

    //     console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //     console.error("Error adding document: ", e);

    //  }
    try {
        // Upload images to storage
        const imageUrls = await Promise.all(
          images.map(async (image, index) => {
            if (image) {
              const storageRef = storage.ref(`images/product_${index + 1}`);
              const imageFile = await fetch(image).then((res) => res.blob());
              await storageRef.put(imageFile);
              return storageRef.getDownloadURL();
            }
            return null;
          })
        );
    
 await addDoc(collection(db, "Products"), {
    title: productInfo.title,
    description: productInfo.description,
    price: productInfo.price,
    images: imageUrls,
  });

        console.log('Data uploaded to Firebase');
      } catch (error) {
        console.error('Error uploading data to Firebase:', error);
      }
    };

