import MainContainer from "./components/MainContainer/MainContainer"
import Navbar from "./components/Navbar/Navbar"

function App() {

    return (
        <div className="h-screen w-screen flex flex-col items-center relative">
            <Navbar/>
            <MainContainer/>
        </div>
    )
}

export default App