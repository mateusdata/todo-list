import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function TodoList({todo, deleteTodo}) {

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

            <ListItem
               
                secondaryAction={
                    <IconButton onClick={() => deleteTodo(todo.id)} edge="end" aria-label="DeleteIcon">
                        <DeleteIcon />
                    </IconButton>
                }
                disablePadding
            >
                <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            tabIndex={-1}
                            disableRipple
                           
                        />
                    </ListItemIcon>
                    <ListItemText primary={todo.text} />
                </ListItemButton>
            </ListItem>

        </List>
    );
}
