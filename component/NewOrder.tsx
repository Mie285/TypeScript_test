import React, { ChangeEvent, FormEvent, useState } from 'react';
import {AddNewInput} from '../types'

interface NewOrderProps{
    addInput: AddNewInput
}
export const NewOrder: React.FC<NewOrderProps> = ({addInput}) =>{
    const [newInput, setNewInput] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setNewInput(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        addInput(newInput)
        setNewInput("")
    }

    return (
    <form>
        <input type = "text" value={newInput} onChange={handleChange}/>
        <button type = "submit" onClick={handleSubmit}>Add</button>
    </form>
    )
}