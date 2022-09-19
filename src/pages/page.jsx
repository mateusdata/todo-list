import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoList from "../components/todoItens";

export default function Home() {

    const [toDos, setToDos] = useState([]);

    const toDoHandler = (todo) => {
        console.log(todo);
        setToDos([...toDos, todo]);
    }

    const deleteTodo = (id) => {
        console.log(id)
        console.log(toDos)
        let filtro = toDos.filter((todo) => todo.id !==id);
        console.log("filtro", filtro, "000")
        setToDos(filtro)
    }

   /* const addTodo = (todo) => {
        if (!toDos.some(item => item.text === todo.text)) {
            setToDos([...toDos, todo]);
        }
    }*/



    return (
        // <Container maxWidth="xs" style={{backgroundColor: "blue"}}>
        <Container maxWidth="xs" style={{ marginTop: "2em" }}>
            <Form toDoHandler={toDoHandler} /> <br />
            <List sx={{ marginTop: "0em" }}>
                {toDos.map((todo) => (
                    <div key={todo.id} style={{ marginTop: "1em" }}>
                        <TodoList  todo={todo} deleteTodo={deleteTodo} />
                    </div>
                ))}
            </List>

        </Container>
    );
}