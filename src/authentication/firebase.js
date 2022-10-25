// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyDX8xNJY_dJaBhPqPanxhfcfZZx3EyC_I4",
//   authDomain: "react-router-148ce.firebaseapp.com",
//   projectId: "react-router-148ce",
//   storageBucket: "react-router-148ce.appspot.com",
//   messagingSenderId: "147260832660",
//   appId: "1:147260832660:web:1c25408dda137f578a6d81"
  apiKey: "AIzaSyAisBgthFPgOojt7AyMkIU75cc6TiALFHM",
  authDomain: "dts2022-d0717-1337.firebaseapp.com",
  projectId: "dts2022-d0717-1337",
  storageBucket: "dts2022-d0717-1337.appspot.com",
  messagingSenderId: "637887224144",
  appId: "1:637887224144:web:eb98b73852b543b184b455"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerDenganEmailDanPassword = async (email, password)=>{
    try{
        const userYangDidapatkan = await createUserWithEmailAndPassword(auth,email,password)

    console.log("user", userYangDidapatkan.user)

    }catch(err){
        console.log(err)
        console.log('err.code', err.code)
        console.log('error message', err.message)
    }
}

const loginDenganEmailDanPassword= async(email, password)=>{
    try{
        const userYangLogin= await signInWithEmailAndPassword(auth, email, password)
        console.log("user login", userYangLogin.user)

    }catch(err){
        console.log(err)
        console.log('err.code', err.code)
        console.log('error message', err.message)
    }
}

const resetPasswordKarenaLupa = async(email)=>{
    try{
        await sendPasswordResetEmail(auth, email)
    }catch(err){
        console.log(err)
        console.log('err.code', err.code)
        console.log('error message', err.message)
    }
}

const keluarDariApplikasi = async()=>{
   try{
    await signOut(auth)
   }catch(err){
    console.log(err)
    console.log('err.code', err.code)
    console.log('error message', err.message)
   }
}

export {
    auth, 
    registerDenganEmailDanPassword, 
    loginDenganEmailDanPassword,
    resetPasswordKarenaLupa,
    keluarDariApplikasi
} 
