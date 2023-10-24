import { List, ListItem, ListItemText, Typography } from "@mui/material"

const BidInfo = (props) => {
    const { auctionState } = props

    return (
        <List>
            <ListItem>
                <ListItemText primary="Highest Bidder:" />
                <Typography>{auctionState.highestBidder}</Typography>
            </ListItem>
            <ListItem>
                <ListItemText primary="Highest Bid:" />
                <Typography>${parseFloat(auctionState.highestBid).toFixed(2)}</Typography>
            </ListItem>
        </List>
    )
}

export default BidInfo