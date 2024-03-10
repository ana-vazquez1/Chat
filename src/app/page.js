'use client'
import { useState } from 'react';
import { Stack, TextField, Button, Typography } from "@mui/material"

export default function Home() {

    const [text, setText] = useState("")
    const [messages, setMessages] = useState([])

    const handleChange = (event) => {
        const value = event.target.value;
        setText(value);
    }
    
    const handleClic = () => {
        const newMessage = {
            id: messages.length ,
            message: text,
            createdAt: new Date(),
            userType: "user"
        }
        setMessages([...messages,newMessage])
        setText("")
    }

    console.log(messages)
    return (
        <Stack spacing={2} height="100%">
            <Stack flexBasis="calc(100% - 60px)" sx={{
                overflowY: "auto"
            }} spacing={1}>

                {
                    messages.map((message) => (
                        <Stack flexShrink={0} width="80%" height="100px" sx={{
                            backgroundColor: "gray",
                            borderRadius: "10px",
                            alignSelf: "end"
                        }}>
                            <Typography variant="span" gutterBottom>
                                {message.message}
                            </Typography>

                            <Typography variant="span" gutterBottom>
                                {message.createdAt.toLocaleString()}
                            </Typography>
                        </Stack>
                    ))
                }                

            </Stack>
            <Stack flexShrink={0} direction="row" p={2} spacing={2}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Escribir Mensaje"
                    variant="outlined"
                    value={text}
                    type="text"
                    onChange={handleChange}
                />
                <Button
                   onClick={handleClic}
                    variant="contained">
                    Agregar
                </Button>
                <div>
                    <ul>

                    </ul>
                </div>
            </Stack>
        </Stack>
    );
}