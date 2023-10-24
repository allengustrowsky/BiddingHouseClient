import { BadgeOutlined, LocalOfferOutlined } from "@mui/icons-material"
import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"

const NewAuctionForm = (props) => {
    const { socket, apiKey } = props
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const subAuction = (event) => {
        socket.emit("AUCTION", apiKey, name, price, description)
    }

    const trySubAuction = (event) => {
        if (event.key == "Enter") {
            socket.emit("AUCTION", apiKey, name, price, description)
        }
    }

    return (
        <div>
            <Typography variant="h5" component="p" sx={{ marginTop: "70px", width: "320px" }}>No auction is currently live. Submit a bid request!</Typography>
            <div id="item-form-container">
                <div id="name-and-price">
                    <TextField id="name" onChange={event => setName(event.target.value)} onKeyDown={trySubAuction} value={name} label="Name" margin="normal" sx={{ width: "150px" }} InputProps={{startAdornment: <BadgeOutlined />}} />
                    <TextField id="price" onChange={event => setPrice(event.target.value)} onKeyDown={trySubAuction} value={price} label="Price" margin="normal" sx={{ width: "150px" }} InputProps={{startAdornment: <LocalOfferOutlined />}} />
                </div>
                <TextField id="description" onChange={event => setDescription(event.target.value)} onKeyDown={trySubAuction} value={description} label="Description" multiline rows={5} margin="normal" sx={{ width: "150px" }} />
            </div>
            <Button onClick={subAuction}>Submit</Button>
        </div>
    )
}

export default NewAuctionForm