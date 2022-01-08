import { collection, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import db from "../firebase/firebase";
import { useAuth0 } from "@auth0/auth0-react";

export const GetData = () => {
  //User data
  const { user } = useAuth0();
  // const userKeyAuth = user.sub.replace("google-oauth2|", "");

  //Title when create document in Firebase
  let userKey = "";
  if (user.sub.includes("google-oauth2|")) {
    userKey = user.sub.replace("google-oauth2|", "");
  } else if (user.sub.includes("auth0|")) {
    userKey = user.sub.replace("auth0|", "");
  }
  //Get data from firebase
  const getDatafirebase = async () => {
    const data = await getDocs(collection(db, userKey));
    return data;
  };

  //Update docs in firebase
  const addNewDocument = async (service, dataUser) => {
    try {
      await setDoc(doc(db, userKey, service), {
        dataUser,
      });
    } catch (e) {
      console.error("Error adding document: ");
    }
  };

  return { addNewDocument, getDatafirebase };
};
