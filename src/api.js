import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzseG3GEVLa48HOupxdpjSMWELQCQkxl0",
  authDomain: "alexander-r---vanlife.firebaseapp.com",
  projectId: "alexander-r---vanlife",
  storageBucket: "alexander-r---vanlife.appspot.com",
  messagingSenderId: "774181499876",
  appId: "1:774181499876:web:d43168fd73ef1d13e28df1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  console.log(dataArr)
  return dataArr
}









// export async function getVans(id) {
//   const url = id ? `/api/vans/${id}` : "/api/vans"
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message:"Failed to fetch vans",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data.vans
}

export async function loginUser(creds) {
  const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
  )

  const data = await res.json()

  if (!res.ok) {
    throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
    }
  }
 return data
}
