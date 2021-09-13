import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./pages/Banner";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Header />
        <Banner />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
