
const TranscHistory = (props)=>{

    return (
        <div className="transaction-history">

            <h2>Your Recent Transactions</h2>
            <table className="container">
                <thead>
                    <tr>
                        <th>Game Type</th>
                        <th>Address</th>
                        <th>Ticket ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.type}</td>
                        <td className="address">{props.address.slice(0,8)+"..."}</td>
                        <td>{props.ticket}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TranscHistory;