import "./App.css"
import NavbarMenu from "./MyNav"
import MyFooter from "./MyFooter"
import Welcome from "./Welcome"
import AllTheBooks from "./AllTheBooks"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <NavbarMenu></NavbarMenu>
      <Welcome></Welcome>
      <AllTheBooks></AllTheBooks>
      <MyFooter></MyFooter>
    </>
  )
}

export default App
