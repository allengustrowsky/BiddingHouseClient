import { AttachMoneyOutlined, Send } from "@mui/icons-material"
import { Button, TextField } from "@mui/material"
import { useState } from "react"


const BidForm = (props) => {
    const { socket, apiKey } = props
    const [bid, setBid] = useState("")

    const handleBidChange = (event) => {
        setBid(event.target.value)
    }

    const trySubBid = (event) => {
        if (event.key == "Enter") {
            socket.emit("BID", apiKey, bid)
            setBid("")
        }
    }

    const subBid = (event) => {
        socket.emit("BID", apiKey, bid)
        setBid("")
    }

    return (
        <div id="bid-container">
            <TextField id="bid" onChange={handleBidChange} onKeyDown={trySubBid} value={bid} label="Bid" margin="normal" sx={{ width: "170px" }} InputProps={{startAdornment: <AttachMoneyOutlined />}} />
            <Button onClick={subBid} endIcon={<Send />}>Send</Button>
        </div>
    )
}

export default BidForm