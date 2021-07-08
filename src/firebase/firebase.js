import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDssB9yUsBvcHeklCfiflh61sluPJmLrMA",
    authDomain: "emdadkaran-1614085008324.firebaseapp.com",
    projectId: "emdadkaran-1614085008324",
    storageBucket: "emdadkaran-1614085008324.appspot.com",
    messagingSenderId: "829905291143",
    appId: "1:829905291143:web:92a84f7944cd3e90fc7522"
};

firebase.initializeApp(config);





export const createUserProfileDocument=async(userAuth,aditionalData)=>{
    if (! userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapShot=await userRef.get()
   
    if(!snapShot.exists){
      const {displayName,email}=userAuth
      const createdAt=new Date();
      try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...aditionalData
          })
      }
      catch(error){
        console.log('error created user',error.message)
      }
    }
    return userRef
  }



  export const AddCollectionAndDoc=async (collectionKey,objectADD)=>{
    const collectionRef=firestore.collection(collectionKey)
  
         
    const batch=firestore.batch()
    objectADD.forEach(obj => {
      const newDocRef=collectionRef.doc()
  
    batch.set(newDocRef,obj)
  
  })
  
  return await  batch.commit()
  }
  


export const auth = firebase.auth();
export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;