import { Typography } from "@mui/material"
import DisplayAuctionInfo from "./DisplayAuctionInfo"
import NewAuctionForm from "./NewAuctionForm"

const AuctionSummary = (props) => {
    const { auctionState, socket, error, apiKey } = props

    return (
        <div id="summary-container">
            <Typography variant="body2" component="p" color="error">{error}</Typography>
            {auctionState.auctionState === 0 
                ? <NewAuctionForm socket={socket} apiKey={apiKey} />
                : <DisplayAuctionInfo auctionState={auctionState} socket={socket} apiKey={apiKey} />
            }
        </div>
    )
}

export default AuctionSummary