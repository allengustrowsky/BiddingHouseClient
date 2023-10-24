import { Groups, LogoutOutlined, SecurityRounded, Storage } from "@mui/icons-material"
import { Button, Chip, Divider, List, ListItem, ListItemIcon, ListItemText, Modal, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"

const AuctionData = (props) => {
    const { auctionState, serverInfo, socket, setSocket, setLoggedIn } = props
    const [stateLabel, setStateLabel] = useState("")

    useEffect(() => {
        switch (auctionState.auctionState) {
            case 0: 
                setStateLabel("Floor Open!")
                break
            case 1:
                setStateLabel("Auction Pending")
                break
            case 2:
                setStateLabel("Live Auction!")
                break
            default:
                setStateLabel("Error")
        }
    }, [auctionState])

    const disconnect = () => {
        socket.disconnect()
        setLoggedIn(false)
        setSocket(null)
    }

    return (
        <Paper elevation={3} sx={{ width: "330px", maxHeight: "550px", overflow: "scroll" }}>
            <Typography variant="h4" component="p">{stateLabel}</Typography>
            <List sx={{ width: "90%", margin: "0 auto"}}>
                <ListItem>
                    <ListItemIcon>
                        <Groups color="success" />
                    </ListItemIcon>
                    <ListItemText primary="Online:"/>
                    <Typography>{auctionState.connectedUsers}</Typography>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SecurityRounded color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Admin:"/>
                    <Typography sx={{ maxWidth: "140px", overflow: "scroll"}}>{auctionState.admin}</Typography>
                </ListItem>
            </List>

            <Divider sx={{ width: "90%", margin: "0 auto"}}>
                <Chip variant="outlined" icon={<Storage />} label="Server Info" />
            </Divider>
            <List sx={{ width: "70%", margin: "0 auto"}}>
                <ListItem>
                    <ListItemText primary="IP:"/>
                    <Typography sx={{ fontStyle: "italic" }}>{serverInfo.ip}</Typography>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Port:" />
                    <Typography sx={{ fontStyle: "italic" }}>{serverInfo.port}</Typography>
                </ListItem>
            </List>

            <Button variant="outlined" color="warning" onClick={disconnect} startIcon={<LogoutOutlined />} sx={{ marginTop: "20px"}}>Disconnect</Button>

        </Paper>
    )
}

export default AuctionData