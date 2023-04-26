import logo from "./logo.svg"
import "./App.css"
import Datatable from "./components/Datatable"
import Data from "./data.json"
function App() {
  const datas = Data
  return (
    <div className="App">
      <Datatable data={datas} />
    </div>
  )
}

export default App
