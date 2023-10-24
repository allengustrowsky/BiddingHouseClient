import { AttachMoney, CardMembershipOutlined, StoreOutlined } from "@mui/icons-material"
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react"

const PersonalInfo = (props) => {
    const { auctionState, socket, apiKey } = props
    const [deposit, setDeposit] = useState("")

    const handleDepositChange = (event) => {
        setDeposit(event.target.value)
    }    

    const trySubDeposit = (event) => {
        if (event.key == "Enter") {
            socket.emit("DEPOSIT", apiKey, event.target.value)
            setDeposit("")
        }
    }

    return (
        <Paper elevation={3} sx={{ width: "330px", maxHeight: "550px", overflow: "scroll" }}>
            <Typography variant="h5" component="p">Welcome, {auctionState.name}</Typography>

            <Typography variant="h6" component="p" sx={{ textAlign: "left", margin: "10px 5px 5px" }}>Balance: ${auctionState.balance.toFixed(2)}</Typography>
            <TextField id="deposit" onChange={handleDepositChange} onKeyDown={trySubDeposit} value={deposit} label="Deposit" margin="normal" sx={{ width: "150px", height: "30px" }} InputProps={{startAdornment: <AttachMoney />}} />
            
            <Divider sx={{ width: "90%", margin: "26px auto 16px" }}></Divider>

            <Typography variant="h6" sx={{ textAlign: "left", margin: "5px 5px 0" }}>Purchased items:</Typography>
            {auctionState.inventory.length === 0
                ? <Typography variant="subtitle1" sx={{ fontStyle: "italic", textAlign: "left", margin: "0 5px 5px" }}>None</Typography> :
                <List>
                    {auctionState.inventory.map((item, key) => {
                        return (
                            <ListItem key={key}>
                                <ListItemAvatar>
                                    <Avatar sx={{ backgroundColor: "white", border: "1px solid #2a2a2a" }}>
                                        <CardMembershipOutlined color="primary"/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item.name} secondary={`$${parseFloat(item.price).toFixed(2)}  -  ${item.description}`} />
                            </ListItem>
                        )
                    })}
                </List>
            }

            <Typography variant="h6" sx={{ textAlign: "left", margin: "5px 5px 0" }}>Sold items:</Typography>
            {auctionState.soldItems.length === 0
                ? <Typography variant="subtitle1" sx={{ fontStyle: "italic", textAlign: "left", margin: "0 5px 5px" }}>None</Typography> :
                <List>
                    {auctionState.soldItems.map((item, key) => {
                        return (
                            <ListItem key={key}>
                                <ListItemAvatar>
                                    <Avatar sx={{ backgroundColor: "white", border: "1px solid #2a2a2a" }}>
                                        <StoreOutlined color="secondary"/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item.name} secondary={`$${parseFloat(item.price).toFixed(2)}  -  ${item.description}`} />
                            </ListItem>
                        )
                    })}
                </List>
            }
        </Paper>
    )
}

export default PersonalInfo