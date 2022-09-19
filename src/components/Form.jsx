import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form({ toDoHandler }) {
    const [text, setText] = useState(null);
    const [id, setId] = useState(0);
    const todoCreate = (text) => {
        const todoObj = { text: text, id: id };
        setId(id + 1);
        if (todoObj.text !== null && todoObj.text !== "") {
            toDoHandler(todoObj);
            document.getElementById("outlined-basic").value = null
            /*const equalTask = () => {
                return todoObj.text === todoObj.text; 
            }*/
            //console.log(equalTask() +" dfddf")
            setText(null)
        }
        console.log(text);
    }

    return (
        <Paper style={{ padding: "1em" }}>
            <div style={{ display: "flex", justifyContent: "center" }} >
                <TextField onChange={(valorDigitado) => setText(valorDigitado.target.value)} id="outlined-basic" label="Tarefa" variant="outlined" fullWidth />
                <Button style={{ border: "2px blue solid", marginLeft: "1%" }} onClick={() => todoCreate(text)} variant="text">ADD</Button>
            </div>
        </Paper>
    );
}