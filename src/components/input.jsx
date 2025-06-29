import { useEffect, useState } from "react";

const Input = (props) => {

    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        setEnteredValue(e.target.value);
    }
 
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onAddTask(enteredValue);
        setEnteredValue("");
    }

    useEffect(() => {
        if (enteredValue.length >3) {
            setIsValid(true);
        }else{
            setIsValid(false);
        }
    },[enteredValue])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Enter your task" onChange={handleChange} value={enteredValue}></input>
                <button className="add-task-button" disabled = {!isValid} >Create</button>
            </form >
        </>
    )
};

export default Input