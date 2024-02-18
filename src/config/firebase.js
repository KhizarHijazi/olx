import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail,signOut } from "firebase/auth";
import { fetchDataFromApi } from "./api";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


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
export const auth = getAuth(app);
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

// On Auth State Changed
// export function OnAuth(){
// const navigate = useNavigate()

//     useEffect (() => {
//         onAuthStateChanged(auth, (user) => {
//     if (user) {
//       navigate('/')
//     //   const uid = user.uid;
//     } else {
//       navigate('/login')
//     }
//   });
//     },[])

// }

// Sign out
export async function logout() {
    try {
        await signOut(auth)
        alert('You have logged out')
    } catch (error) {
        alert(error.message);

    }
}

export async function forgotPassword({email}) {
    try{
        await sendPasswordResetEmail(auth, email)
        alert('Plz Check Your email to reset your password')
    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    }
     

}





// Add Data To FireStore

// export async function addDataToFireStore() {
//     try {
//         const apiData = await fetchDataFromApi();
//         console.log(apiData.products)
//         apiData.products.map(async (dataitems) => {

//             const docRef = await addDoc(collection(db, "Products"), dataitems);
//             console.log(docRef)
//             console.log("Document written with ID: ", dataitems.id);
//         })
//         console.log("All documents added to Firestore");
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// }
export async function addDataToFireStore() {
    try {
        const apiData = await fetchDataFromApi();
        // console.log(apiData.products);

        apiData.products.map(async (dataitems) => {
            const docRef = doc(db, "Products", `${dataitems.id}`);
            // console.log("docRef: ", docRef);

            await setDoc(docRef, dataitems);
            console.log("Document written with ID: ", dataitems.id);
        });

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
        // console.log(doc.id, " => ", doc.data());
        products.push({ id: doc.id, ...doc.data() })
    })

    return products

}

export const getSingleProduct = async (adId) => {
    try {
        const docRef = doc(db, "Products", adId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {

            return { ...docSnap.data(), id: adId }
        } else {
            return {}
        }

    } catch (error) {
        console.error("Error adding document: ", error);

    }

}

export const addOlxPostDataToFirestore = async (productInfo, images) => {

    try {

        const submissionId = Date.now().toString();
        console.log('submisionid', submissionId)
        const imagesUrls = await Promise.all(images.map(async (image, index) => {

            const storageRef = ref(storage, `images/product_${index + 1}`);
            const snapshot = await uploadBytes(storageRef, image);
            console.log('Uploaded a blob or file!');
            const downloadURL = await getDownloadURL(snapshot.ref);
            return downloadURL;

        }))

        const postObject = {
            title: productInfo.title,
            description: productInfo.description,
            price: productInfo.price,
            images: imagesUrls,
            submissionId: submissionId,

        }
        console.log(postObject)
        await addDoc(collection(db, "Products"), postObject);


        console.log('Data uploaded to Firebase');
    } catch (error) {
        console.error('Error uploading data to Firebase:', error);
    }
};

