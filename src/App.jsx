import MainContainer from "./components/MainContainer/MainContainer"
import Navbar from "./components/Navbar/Navbar"
import Navmenu from "./components/Navbar/Navmenu"

function App() {

    return (
        <div className="h-screen w-screen flex flex-col gap-4 items-center">
            <Navbar/>
            <MainContainer/>
        </div>
    )
}

export default App