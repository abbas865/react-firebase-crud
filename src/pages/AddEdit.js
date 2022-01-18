import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AddEdit.css";
import { toast } from "react-toastify";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const initialState = {
  name: "",
  age: "",
};

const AddEdit = () => {
  const usersCollectionRef = collection(db, "users");
  const [state, setState] = useState(initialState);
  const { name, age } = state;
  const history = useHistory();
  
  const { id } = useParams();

  useEffect(() => {
    if(id){
      const docRef = doc(usersCollectionRef, id);

      const getUsers = async () => {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setState({ ...docSnap.data() });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          setState({ ...initialState });
        }
      };
  
      getUsers();
  
    }
    
  }, [id, usersCollectionRef]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !age) {
      toast.error("Please provide value in each input");
    } else {
      if (!id) {
        await addDoc(usersCollectionRef, { name: name, age: Number(age) })
          .catch((err) => {
            toast.error(err);
          })
          .then(() => {
            toast.success("contact added");
          });

        setTimeout(() => history.push("/"), 500);
      } else {
        const docRef = doc(usersCollectionRef, id);
        await setDoc(docRef, { name: name, age: Number(age) })
          .catch((err) => {
            toast.error(err);
          })
          .then(() => {
            toast.success("contact updated");
          });

        setTimeout(() => history.push("/"), 500);
      }
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">NAME:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="enter name"
          value={name || ""}
          onChange={handleInputChange}
        ></input>
        <label htmlFor="age">age:</label>
        <input
          type="text"
          id="age"
          name="age"
          placeholder="enter age"
          value={age || ""}
          onChange={handleInputChange}
        ></input>
        <input type="submit" value={id ? "Update" : "Save"}></input>
      </form>
    </div>
  );
};

export default AddEdit;
