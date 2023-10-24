import { CheckCircleOutline, DoNotDisturb } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"

const AdminApproval = (props) => {
    const { socket, apiKey } = props

    const subApprove = (approval) => {
        console.log(approval)
        socket.emit("APPROVE", apiKey, approval)
    }

    return(
        <div style={{ marginTop: "20px" }}>
            <Typography variant="button" component="p">Approve / Deny</Typography>
            <div id="admin-approval">
                <IconButton onClick={subApprove.bind(this, 1)}>
                    <CheckCircleOutline color="success" sx={{ fontSize: 45 }} />
                </IconButton>
                <IconButton onClick={subApprove.bind(this, 0)}>
                    <DoNotDisturb color="error" sx={{ fontSize: 45 }} />
                </IconButton>
            </div>
        </div>
    )
}

export default AdminApproval