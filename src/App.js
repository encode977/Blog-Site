import "./App.css";
import Header from "./components/Header";
import Banner from "./pages/Banner";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Header />
        <Banner />
      </div>
    </div>
  );
}

export default App;
