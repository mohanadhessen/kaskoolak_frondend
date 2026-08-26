import Orders from "./components/cards/Orders/Orders";
import Navbar from "./layouts/Navbar/Navbar";
import Customers from "./components/cards/Customers/Customers";
import Shipment from "./components/cards/Shipment/Shipment";
function App() {

  return (
    <>
      {/* <Navbar/> */}
      <Orders />
      <Customers />
      <Shipment />
    </>
  )
}

export default App
