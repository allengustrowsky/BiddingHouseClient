import { useState } from "react"
import "./App.css"
import Auction from "./components/Auction"
import Login from "./components/Login"

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [socket, setSocket] = useState(null)
    const [apiKey, setApiKey] = useState("")
    const [serverInfo, setServerInfo] = useState({ ip: null, port: null })

    return (
        <>
            {loggedIn && socket
                ? <Auction socket={socket} setLoggedIn={setLoggedIn} setSocket={setSocket} apiKey={apiKey} serverInfo={serverInfo}></Auction>
                : <Login setLoggedIn={setLoggedIn} setSocket={setSocket} setApiKey={setApiKey} setServerInfo={setServerInfo}></Login>
            }
        </>
    )
}

export default App
