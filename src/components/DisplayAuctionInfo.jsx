import { LocalOfferOutlined, PersonOutlineOutlined } from "@mui/icons-material"
import { Card, CardContent, Divider, Typography } from "@mui/material"
import AdminApproval from "./AdminApproval"
import BidForm from "./BidForm"
import BidInfo from "./BidInfo"

const DisplayAuctionInfo = (props) => {
    const { auctionState, socket, apiKey } = props

    return (
        <div>
            <Typography variant="h5" component="p" sx={{ margin: "20px 0 10px", width: "320px" }}>{auctionState.auctionState === 1 ? "Pending" : "Live"} Auction:</Typography>

            <Card variant="outlined" sx={{ textAlign: "left", maxWidth: "350px", margin: "0 auto" }}>
                <CardContent>
                    <Typography variant="h6" component="p" sx={{ marginTop: "25px" }}>{auctionState.itemForSale.name}</Typography>
                    <Divider sx={{ margin: "7px 0"}}></Divider>
                    <div id="display-auction-item-details">
                        <Typography sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
                            <LocalOfferOutlined />
                            ${parseFloat(auctionState.itemForSale.price).toFixed(2)}
                        </Typography>
                        <Typography sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
                            <PersonOutlineOutlined />
                            {auctionState.salesPerson}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>{auctionState.itemForSale.description}</Typography>
                    </div>
                </CardContent>                
            </Card>

            {auctionState.isAdmin && auctionState.auctionState === 1 && <AdminApproval socket={socket} apiKey={apiKey} />}

            {auctionState.auctionState === 2 && <BidForm socket={socket} apiKey={apiKey} />}

            {auctionState.auctionState === 2 && <BidInfo auctionState={auctionState} />}
        </div>
    )
}

export default DisplayAuctionInfo