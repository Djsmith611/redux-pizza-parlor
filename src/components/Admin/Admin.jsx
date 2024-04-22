import Ordertable from "../OrderTable/OrderTable"

function Admin() {
  

    return(
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Time</td>
                    <td>Type</td>
                    <td>Total</td>
                </tr>
            </thead>
            <Ordertable />
        </table>
    )
}

export default Admin;