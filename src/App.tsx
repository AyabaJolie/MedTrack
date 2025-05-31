//  import './components/navbar.tsx'
import "./App.css";
import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage";
import Footer from "./components/footer";
import Fonctionnalites from "./components/fonctionnalites";
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
  rel="stylesheet"
></link>;
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <LandingPage />
        <Fonctionnalites />

        <Footer />
      </div>
    </>
  );
}

export default App;
