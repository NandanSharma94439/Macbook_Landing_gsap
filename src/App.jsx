import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap";
import {ScrollTrigger,SplitText} from "gsap/all";
const App = () => {
    return(
        <main>
            <Navbar />
            <Hero />
            <ProductViewer />
        </main>
    )
}
export default App