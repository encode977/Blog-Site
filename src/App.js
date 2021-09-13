import "./App.css";
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
      </div>
    </div>
  );
}

export default App;
