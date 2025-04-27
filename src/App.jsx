import "./index.css";
import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection/IntroSection";
import About from "./components/About/About";
import Perspectives from "./components/Perspectives/Perspectives";
import Coaches from "./components/Coaches/Coaches";
import Package from "./components/Package/Package";
import Forms from "./components/Forms/Forms";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <About />
        <Perspectives />
        <Coaches />
        <Package />
        <Forms />
      </main>
      <Footer />
    </>
  );
}

export default App;
