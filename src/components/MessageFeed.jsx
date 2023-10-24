import { Alert, Paper } from "@mui/material"

const MessageFeed = (props) => {
    const { messages } = props

    return (
        <div id="messages-container">
            <Paper sx={{ maxHeight: "350px", overflow: "scroll", maxWidth: "700px", margin: "15px auto 0", padding: "10px" }}>
                {messages.map((msg, key) => {
                    return <Alert severity="info" key={key} sx={{ maxWidth: "700px", textAlign: "left", margin: "5px 0" }}>{msg}</Alert>
                })}
            </Paper>
        </div>
    )
}

export default MessageFeed
