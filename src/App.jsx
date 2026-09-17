import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import ShowCase from "./components/ShowCase.jsx";
import Performance from "./components/Performance.jsx";
import Features from "./components/Features.jsx";
import HighLights from "./components/HighLights.jsx";
import Footer from "./components/Footer.jsx";
import gsap from "gsap";
import {ScrollTrigger,SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger,SplitText)
const App = () => {
    return(
        <main>
            <Navbar />
            <Hero />
            <ProductViewer />
            <ShowCase />
            <Performance />
            <Features />
            <HighLights />
            <Footer />
        </main>
    )
}
export default App