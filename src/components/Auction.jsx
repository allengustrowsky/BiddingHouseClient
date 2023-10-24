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
    // const [bid, setBid] = useState("")
    // const [deposit, setDeposit] = useState("")
    // const [aucReqItem, setAucReqItem] = useState({name: "", price: "", description: ""})
    // const [approve, setApprove] = useState("")
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
        // console.log("new state:")
        // console.dir(JSON.parse(state))
    })

    socket.on("error", (message) => {
        errorTimer && clearTimeout(errorTimer)
        setError(message)
        setErrorTimer(setTimeout(() => {
            setError("")
        }, 5000))
    })


    // const handleBidChange = (event) => {
    //     setBid(event.target.value)
    // }

    // const trySubBid = (event) => {
    //     if (event.key == "Enter") {
    //         socket.emit("BID", apiKey, event.target.value)
    //         // setBid("") // do this in stateUpdate with flag idea
    //     }
    // }

    // const subBid = (event) => {
    //     socket.emit("BID", apiKey, event.target.value)
    // }

    // const handleAuctionChange = (event) => {
    //     console.log("aucChange")
    //     setAucReqItem(prev => {
    //         const updated = Object.assign({}, prev)
    //         prev[event.target.id] = event.target.value
    //         return updated
    //     })
    // }

    // const trySubAuction = (event) => {
    //     if (event.key == "Enter") {
    //         socket.emit("AUCTION", apiKey, aucReqItem.name, aucReqItem.price, aucReqItem.description)
    //         // setAucReqItem({name: "", price: "", description: ""}) // do this in stateUpdate with flag idea
    //     }
    // }

    // const subAuction = (event) => {
    //     socket.emit("AUCTION", apiKey, aucReqItem.name, aucReqItem.price, aucReqItem.description)
    // }

    // const handleDepositChange = (event) => {
    //     setDeposit(event.target.value)
    // }

    // const subDeposit = (event) => {
    //     if (event.key == "Enter") {
    //         socket.emit("DEPOSIT", apiKey, event.target.value)
    //         setDeposit("")
    //     }
    // }

    // const handleApproveChange = (event) => {
    //     setApprove(event.target.value)        
    // }

    // const trySubApprove = (event) => {
    //     if (event.key == "Enter") {
    //         socket.emit("APPROVE", apiKey, event.target.value)
    //         // setApprove("") // do this in stateUpdate with flag idea
    //     }
    // }

    // const subApprove = (event) => {
    //     socket.emit("APPROVE", apiKey, event.target.value)
    //     setApprove("")
    // }

    // const disconnect = () => {
    //     socket.emit("teardown", apiKey)
    //     socket.disconnect()
    //     setLoggedIn(false)
    //     setSocket(null)
    // }

    return (
        <>
            <Typography variant="h2" component="h1" sx={{ marginBottom: "15px" }}>Auction House</Typography>

            <div id="primary-container">
                {auctionState && <PersonalInfo auctionState={auctionState} socket={socket} apiKey={apiKey} />}
                {auctionState && <AuctionSummary auctionState={auctionState} socket={socket} error={error} apiKey={apiKey} />}
                {auctionState && <AuctionData auctionState={auctionState} serverInfo={serverInfo} socket={socket} setSocket={setSocket} setLoggedIn={setLoggedIn} />}
            </div>

            <MessageFeed messages={messages}/>
            

            {/* <p>{JSON.stringify(auctionState)}</p> */}
            {/* <table style={{margin: "auto"}}>
                <tbody>
                    {Object.keys(auctionState).map((key, idx) => (
                        <tr key={idx}>
                            <td style={{textAlign: "right", paddingRight: "5px"}}>{key}</td>
                            <td style={{textAlign: "left"}}>{JSON.stringify(auctionState[key])}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            {/* <label> */}
                {/* Bid  */}
                {/* $<input id="bid" onChange={handleBidChange} onKeyDown={trySubBid} value={bid} style={{ width: "250px", height: "45px" }}></input> */}
            {/* </label> */}
            {/* <button onClick={subBid}>Submit</button> */}
            {/* <br></br> */}
            {/* <div> */}
                {/* Auction:  */}
                {/* <label> */}
                    {/* Name <input id="name" onChange={handleAuctionChange} onKeyDown={trySubAuction} value={aucReqItem.name} style={{ width: "150px", height: "30px" }}></input> */}
                    {/* Price <input id="price" onChange={handleAuctionChange} onKeyDown={trySubAuction} value={aucReqItem.price} style={{ width: "150px", height: "30px" }}></input> */}
                    {/* Description <input id="description" onChange={handleAuctionChange} onKeyDown={trySubAuction} value={aucReqItem.description} style={{ width: "150px", height: "30px" }}></input> */}
                {/* </label> */}
                {/* <button onClick={subAuction}>Submit</button> */}
            {/* </div> */}
            {/* <br></br> */}
            {/* <label>
                Deposit 
                $<input id="deposit" onChange={handleDepositChange} onKeyDown={subDeposit} value={deposit} style={{ width: "250px", height: "45px" }}></input>
            </label> */}
            {/* <br></br> */}
            {/* <label> */}
                {/* Approve */}
                {/* <input id="approve" onChange={handleApproveChange} onKeyDown={trySubApprove} value={approve} style={{ width: "250px", height: "45px" }}></input> */}
            {/* </label> */}
            {/* <button onClick={subApprove}>Submit</button> */}
            {/* <br></br> */}
            {/* <button onClick={sendRequest}>Submit</button> */}
            {/* <button onClick={disconnect}>Disconnect</button> */}
        </>
    )
}

export default Auction