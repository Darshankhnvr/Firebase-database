import React from 'react'
import { addDoc, collection } from '@firebase/firestore'
import db from "../utils/firestore"
import {useState} from 'react'


const AddItem = () =>{
    const [value, setvalue] = useState('')

    const handleSubmit = async (event)=>{
        event.preventDefault()

        try{
            const docref = await addDoc(collection(db, "items"), {
                name:value,
            })
            console.log("document written with id", docref.id)
            setvalue('')
        }
        catch(error){
            console.log("error adding document", error)
        }
    }
    return(
        <div>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
            <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} placeholder="Add a new item" />
            <button type="submit">Add item</button>
        </form>
        </div>
    )
}

export default AddItem
