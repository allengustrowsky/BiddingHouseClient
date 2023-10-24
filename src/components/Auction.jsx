import { Typography } from "@mui/material"
import { useState, useEffect } from "react"
import PersonalInfo from "./PersonalInfo"
import AuctionData from "./AuctionData"
import AuctionSummary from "./AuctionSummary"
import MessageFeed from "./MessageFeed"

const Auction = (props) => {
    const { socket, setLoggedIn, setSocket, apiKey, serverInfo } = props
    const [auctionState, setAuctionState] = useState("")
    const [messages, setMessages] = useState([])
    const [error, setError] = useState("")
    const [errorTimer, setErrorTimer] = useState(null)

    useEffect(() => {
        socket.emit("STATE", apiKey)
    }, [])

    useEffect(() => {
        setMessages(prev => {
            const newMessages = prev.slice(0, 9)
            auctionState.message && newMessages.splice(0, 0, auctionState.message)
            return newMessages
        })
    }, [auctionState])

    socket.on("stateUpdate", (state) => {
        if (JSON.parse(state).apiKey === apiKey) {
            setAuctionState(JSON.parse(state))
        }
    })

    socket.on("error", (message) => {
        errorTimer && clearTimeout(errorTimer)
        setError(message)
        setErrorTimer(setTimeout(() => {
            setError("")
        }, 5000))
    })

    return (
        <>
            <Typography variant="h2" component="h1" sx={{ marginBottom: "15px" }}>Auction House</Typography>

            <div id="primary-container">
                {auctionState && <PersonalInfo auctionState={auctionState} socket={socket} apiKey={apiKey} />}
                {auctionState && <AuctionSummary auctionState={auctionState} socket={socket} error={error} apiKey={apiKey} />}
                {auctionState && <AuctionData auctionState={auctionState} serverInfo={serverInfo} socket={socket} setSocket={setSocket} setLoggedIn={setLoggedIn} />}
            </div>

            <MessageFeed messages={messages}/>
        </>
    )
}

export default Auction