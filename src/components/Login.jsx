import { AttachMoneyOutlined, StoreOutlined } from "@mui/icons-material"
import { Alert, Avatar, Button, List, ListItem, ListItemText, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { io } from "socket.io-client"

const Login = (props) => {
    const { setLoggedIn, setSocket, setApiKey, setServerInfo } = props
    const [ip, setIp] = useState("")
    const [port, setPort] = useState("")
    const [name, setName] = useState("")
    const [balance, setBalance] = useState("")
    const [errors, setErrors] = useState("")

    const handleIpChange = (event) => {
        setIp(event.target.value)
    }

    const handlePortChange = (event) => {
        setPort(event.target.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleBalanceChange = (event) => {
        setBalance(event.target.value)
    }

    const trySubmit = (event) => {
        if (event.key === "Enter") {
            connectSocket()
        }
    }

    const submit = () => {
        setErrors("")
        setLoggedIn(true)
        connectSocket()
    }

    const connectSocket = () => {
        if (ip && port && name && balance) {
            const socket = io(`ws://${ip}:${port}`, { 
                cors: { origin: "*" },
                query: {
                    name, 
                    balance
                }
            })
            const timer = setTimeout(() => {
                if (!socket.connected) {
                    setErrors("Connection timed out!  Please try again.")
                    socket.disconnect()
                }
            }, 4000) 
            socket.on("connect", () => {
                socket.on("initError", (err) => {
                    setErrors(err)
                    socket.disconnect()
                })
                socket.on("join", (key) => {
                    clearTimeout(timer)
                    setLoggedIn(true)
                    setSocket(socket)
                    setApiKey(key)
                    setServerInfo({ port, ip })
                    console.log(`connect: ${key}`)
                })

            })
        } else {
            setErrors("Please fill out all fields!")
        }
    }

    return (
        <>
            <Typography variant="h2" component="h1" sx={{ marginBottom: "15px" }}>Join an Auction House</Typography>
            <Paper elevation={3}>    
                { errors && <Alert severity="error" sx={{ width: "max-content", margin: "10px auto", padding: "0 10px" }}>{errors}</Alert>}
                <TextField id="ip" onChange={handleIpChange} onKeyDown={trySubmit} value={ip} label="IP" margin="normal" sx={{ width: "250px", height: "45px" }} />
                <br></br>
                <TextField id="port" onChange={handlePortChange} onKeyDown={trySubmit} value={port} label="Port" margin="normal" style={{ width: "250px", height: "45px" }} />
                <br></br>
                <TextField id="name" onChange={handleNameChange} onKeyDown={trySubmit} value={name} label="Name" margin="normal" style={{ width: "250px", height: "45px" }} />
                <br></br>
                <TextField id="balance" onChange={handleBalanceChange} onKeyDown={trySubmit} value={balance} label="Starting balance" margin="normal" style={{ width: "250px", height: "45px" }} />
                <br></br>

                <Button variant="outlined" size="large" onClick={submit} startIcon={<AttachMoneyOutlined />} sx={{ margin: "15px 0" }}>Join</Button>
            </Paper>
        </>
    )
}

export default Login