import React, { useState } from "react"
import { db } from "../firebase"
import { doc, setDoc } from "firebase/firestore"

const AddToDataBase = () => {
  const [artist, setArtist] = useState("")
  const [artistValue, setArtistValue] = useState("")

  console.log(artistValue)

  //Adds e new project to firebase
  const addCollection = async () => {
    if (artist !== "") {
      try {
        await setDoc(doc(db, "artits", artist), {
          artist,
        })
        setArtist("")
        setArtistValue(artist)
        alert(`${artist} has been added!`)
      } catch (e) {
        console.log("Error adding document: ", e)
      }
    } else alert("Missing fields")
  }
  return (
    <div>
      <h2>Add a artist/band:</h2>

      <input
        type="text"
        placeholder="ex. AC/DC"
        onChange={(e) => setArtist(e.target.value)}
      />
      <button onClick={addCollection}>Start</button>
    </div>
  )
}

export default AddToDataBase
