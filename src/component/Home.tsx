import About from "./About";
import Contact from "./Contant";
import Footer from "./Footer";
import Header from "./Header";
import Service from "./Services";

function Home() {
    return (
        <>
            <Header />
            <About/>
            <Service/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home;