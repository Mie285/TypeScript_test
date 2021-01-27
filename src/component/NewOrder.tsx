import React, { ChangeEvent, FormEvent, useState } from 'react';
import {AddNewInput} from '../types' //RemoveOrder

interface NewOrderProps{
    addInput: AddNewInput
    //rmInput : RemoveOrder
}
export const NewOrder: React.FC<NewOrderProps> = ({addInput}) =>{
    const [newInput, setNewInput] = useState("")
    const [oldId, setOldId] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setNewInput(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        addInput(newInput)
        setNewInput("")
    }

    // const handleRemove = (e: FormEvent<HTMLButtonElement>) => {
    // }
    //<button type="button" onClick={() => {handleRemove}}> DEL </button>

    return (
    <form>
        <input type = "text" value={newInput} onChange={handleChange}/>
        
        <button type = "submit" onClick={handleSubmit}>Add</button>
    </form>
    )
}